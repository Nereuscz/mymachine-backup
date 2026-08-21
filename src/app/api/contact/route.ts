const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const attemptsByIp = new Map<string, number[]>();

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  organization?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isRateLimited(ip: string): boolean {
  if (ip === "unknown") return false;

  const now = Date.now();
  const recent = (attemptsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    attemptsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  attemptsByIp.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return Response.json(
      { message: "Neplatný formát požadavku." },
      { status: 415 }
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { message: "Odesíláte příliš mnoho zpráv. Zkuste to prosím později." },
      { status: 429 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Neplatná data formuláře." }, { status: 400 });
  }

  const firstName = cleanString(payload.firstName);
  const lastName = cleanString(payload.lastName);
  const email = cleanString(payload.email);
  const organization = cleanString(payload.organization);
  const message = cleanString(payload.message);
  const website = cleanString(payload.website);

  // Skryté pole vyplňují roboti; odpovíme úspěchem, ale nic neodesíláme.
  if (website) {
    return Response.json({ message: "Zpráva byla odeslána." });
  }

  if (
    firstName.length < 2 ||
    firstName.length > 80 ||
    lastName.length < 2 ||
    lastName.length > 80 ||
    !isValidEmail(email) ||
    email.length > 160 ||
    organization.length > 160 ||
    message.length < 10 ||
    message.length > 3000
  ) {
    return Response.json(
      { message: "Zkontrolujte prosím povinná pole a jejich délku." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to =
    process.env.CONTACT_TO_EMAIL || "dominika.franekova@futureshapers.cz";

  if (!apiKey || !from) {
    return Response.json(
      {
        message:
          "Odesílání zpráv se právě nastavuje. Napište nám prosím na dominika.franekova@futureshapers.cz.",
      },
      { status: 503 }
    );
  }

  const safe = {
    firstName: escapeHtml(firstName),
    lastName: escapeHtml(lastName),
    email: escapeHtml(email),
    organization: escapeHtml(organization || "Neuvedeno"),
    message: escapeHtml(message).replaceAll("\n", "<br />"),
  };

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nová zpráva z webu MyMachine — ${firstName} ${lastName}`,
      text: [
        `Jméno: ${firstName} ${lastName}`,
        `E-mail: ${email}`,
        `Organizace: ${organization || "Neuvedeno"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h1>Nová zpráva z webu MyMachine</h1>
        <p><strong>Jméno:</strong> ${safe.firstName} ${safe.lastName}</p>
        <p><strong>E-mail:</strong> ${safe.email}</p>
        <p><strong>Organizace:</strong> ${safe.organization}</p>
        <hr />
        <p>${safe.message}</p>
      `,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend contact email failed", resendResponse.status);
    return Response.json(
      {
        message:
          "Zprávu se nepodařilo odeslat. Zkuste to znovu nebo napište na dominika.franekova@futureshapers.cz.",
      },
      { status: 502 }
    );
  }

  return Response.json({ message: "Zpráva byla odeslána." });
}

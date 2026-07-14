"use client";

/** Tečky carouselu — aktivní se roztáhne na 26px a zbarví akcentem. */
export default function CarouselDots({
  count,
  active,
  onSelect,
  label,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  label: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={label}
          onClick={() => onSelect(i)}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            width: i === active ? 26 : 9,
            height: 9,
            borderRadius: 999,
            background: i === active ? "#cbcd15" : "rgba(255,255,255,0.28)",
            transition: "width .3s, background .3s",
          }}
        />
      ))}
    </div>
  );
}

# MyMachine Czechia — web

Produkční implementace webu MyMachine Czechia podle hi-fi návrhu z balíčku
`design_handoff_mymachine` (Future Shapers design systém). Postaveno na
**Next.js (App Router, TypeScript, CSS Modules)** — frontend připravený na
napojení headless CMS.

## Spuštění

```bash
npm install
npm run dev    # vývojový server (http://localhost:3000)
npm run build  # produkční build — všechny stránky se generují staticky
```

## Stránky

| Cesta | Předloha v handoffu |
|---|---|
| `/` | `MyMachine.dc.html` — hero, fáze, o programu, carousel vynálezů, statistiky, mapa, citace, partneři, kontakt, novinky |
| `/vynalezy` | `Vynalezy.dc.html` |
| `/novinky` | `Novinky.dc.html` — filtr Vše / Novinky / O projektu |
| `/novinky/[slug]` | `Clanek.dc.html` — světlá/tmavá varianta (`data-v`), ukazatel průběhu čtení |
| `/zapoj-se` | `Zapoj.dc.html` — záložky škola / vysokoškolák / firma (kotvy `#skola`, `#student`, `#firma`) |
| `/zasady` | `Zasady.dc.html` — kotvy `#soukromi`, `#cookies` |

## Struktura

- `src/app/` — stránky (App Router) + `globals.css` s design tokeny
  převzatými 1:1 z `_ds/tokens` a lokálních `:root` bloků návrhu.
- `src/components/` — sdílené komponenty: `Header` (vč. fullscreen menu
  overlay, breakpoint 900 px), `Footer`, `CookieConsent`, `ImageSlot`,
  `CarouselDots` + podsložky pro jednotlivé stránky.
- `src/content/` — **obsahová vrstva** (novinky, vynálezy, články, partneři).
  Záměrně oddělená od UI: při napojení na headless CMS (doporučeno Strapi,
  případně Directus) stačí nahradit tyto konstanty fetchem z API se stejným
  tvarem dat.
- `src/fonts/` — písmo Obviously (3 řezy, načítané přes `next/font/local`).
- `public/assets/` — loga, ikony, fotky převzaté z handoffu.

## Než půjde web do provozu (z README handoffu)

- **Licence písma Obviously** (OHno Type Co.) — komerční písmo, pro provoz je
  nutná platná licence.
- **Fotky v `public/assets/photos` jsou placeholdery** — nahradit reálnými
  (a doplnit smysluplné `alt` texty v `src/content/`).
- **Termín uzávěrky přihlášek** v žlutém banneru na domovské stránce
  (`[Placeholder …]` v `src/app/page.tsx`).
- **Kontaktní formulář** (`src/components/home/ContactForm.tsx`) je vizuální
  (`preventDefault`) — napojit na backend/e-mail a doplnit validaci.
- **Odkazy na sociální sítě** v sekci Kontakt vedou na `#`.
- **Cookie lišta** (`src/components/CookieConsent.tsx`) ukládá volbu do
  `localStorage` (`mm-cookie-consent`) — před nasazením analytiky ji propojit
  se skutečným spouštěním měřicích skriptů dle souhlasu.
- **Texty na `/zasady`** jsou vzorové — nechat schválit a doplnit údaje
  v hranatých závorkách.

## Napojení CMS (doporučený postup)

1. Postavit Strapi (self-hosted) s kolekcemi `articles` (novinky + detail
   článku) a `inventions` a případně `partners`.
2. Typy v `src/content/*.ts` ponechat, jen exporty přepsat na async funkce,
   které data načtou z API (`fetch` s `next.revalidate`, nebo webhooky
   na revalidaci).
3. Stránky jsou už teď server components — přechod na CMS nevyžaduje změny
   v UI komponentách.

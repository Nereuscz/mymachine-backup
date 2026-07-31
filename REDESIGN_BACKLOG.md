# Backlog přepracování webu MyMachine

Zaevidováno: 31. 7. 2026
Výchozí stav: aktuální obsah větve `main`, commit `07e307a6a8efe3ae461fd2d5b966eac700acc021`

## Jak backlog číst

### Stav vůči současnému webu

- **Nové** — funkce nebo obsah na webu zatím není.
- **Úprava** — základ už existuje, ale musí se přepracovat.
- **Přesun** — existující část se přesune bez zásadní změny funkce.
- **Rozhodnout** — před realizací je potřeba potvrdit obsah nebo zadání.

### Typ práce

- **IA** — informační architektura, pořadí sekcí a navigace.
- **Obsah** — texty, data, citace, rubriky nebo podklady.
- **UI** — vzhled a interakce.
- **Funkce** — chování na webu.
- **Integrace** — napojení na externí službu nebo backend.

### Navržená priorita

- **P0** — rozhodnutí nebo podklad, který blokuje další práci.
- **P1** — hlavní struktura a klíčové uživatelské cesty.
- **P2** — obsahové a vizuální zlepšení.
- **P3** — doplňkové vylepšení.

Priority jsou pracovní návrh a je potřeba je potvrdit před plánováním realizace.

## Stav realizace k 31. 7. 2026

### Dokončeno v této iteraci

| ID | Výsledek |
|---|---|
| HP-01 | Homepage nově vysvětluje roli školy, vysokoškoláka a firmy v samostatné sekci se třemi cílenými CTA. Texty jsou pracovní copy připravené k obsahovému schválení. |
| HP-02 | Sekce Vynálezy je zjednodušená na přehlednou mřížku aktuálního ročníku a obsahuje tlačítko na samostatnou stránku `/vynalezy`. |
| HP-03 | Původní schéma nahradila interaktivní OpenStreetMap mapa. Aktuální rozsah zobrazuje Brno a okolí, Znojmo, Višňové, Hustopeče, Kyjov, Milotice a Hodonín. Mapa je uzamčená na Jihomoravský kraj, výchozí pohled je přiblížený o jeden stupeň, má tmavý vizuální styl a mobilní názvy se zobrazují klepnutím. |
| HP-04 | Sekce Novinky je přesunutá přímo pod mapu zapojených škol. |
| HP-06 | Kontakt je poslední obsahová sekce před footerem. |
| HP-07 | Blok „Mezinárodně uznávaný program“ je začleněný do sekce O programu. |
| HP-08 | Samostatná citace byla z homepage odstraněná. |
| HP-09 | Vynálezy a Novinky v hlavní navigaci vedou na kotvy homepage; samostatné stránky zůstávají dostupné tlačítky v daných sekcích. |
| HP-10 | Homepage zobrazuje tři nejnovější články, každý se samostatným datem publikace. |

### Doplňkové opravy

- Navigace se při menší šířce přepíná do menu dříve, takže se položky nepřekrývají.
- Mobilní hero sekce používá jednosloupcové rozložení a malé displeje skrývají duplicitní CTA v hlavičce.
- Kotvy používají plynulé posouvání podporované aktuální verzí Next.js.
- Přibyly závislosti `leaflet` a `@types/leaflet` pro mapovou komponentu.

### Ověření a známý technický dluh

- Produkční sestavení a kontrola všech změněných TypeScript/TSX souborů procházejí bez chyb.
- Vizuálně ověřeno na desktopu i mobilu; všech sedm mapových lokalit zůstává v záběru.
- Celoprojektový lint nadále hlásí šest dřívějších chyb v `CookieConsent.tsx`, `Footer.tsx` a `ZapojTabs.tsx`. Tyto soubory nejsou součástí této iterace a chyby jsou ponechané k samostatné opravě.
- HP-03 je hotové v aktuálně odsouhlaseném rozsahu měst. Pro budoucí zobrazení jednotlivých škol zůstává otevřený datový podklad DEP-03.

## 1. Homepage

| ID | Priorita | Typ | Stav | Zadání a podmínka dokončení |
|---|---:|---|---|---|
| HP-01 | P0 | Obsah | Rozhodnout | **Více propsat cílové skupiny.** Určit, zda mají být škola, vysokoškolák a firma zmíněny už v hero sekci, nebo v nové společné sekci. Dodat finální texty a CTA pro každou cílovku. |
| HP-02 | P1 | IA, UI | Úprava | **Zjednodušit sekci Vynálezy.** Na homepage ukázat pouze vynálezy aktuálního ročníku v jednodušším náhledu. Sekce musí mít zřetelný proklik tlačítkem na `/vynalezy`. |
| HP-03 | P1 | Integrace, UI | Úprava | **Nahradit současnou schematickou mapu mapou OpenStreetMap.** Zobrazit zapojené školy, přístupné ovládání a použitelnou mobilní variantu. Je potřeba dodat seznam škol, adresy/souřadnice a rozhodnout, zda bude mapa interaktivní. |
| HP-04 | P1 | IA | Přesun | **Přesunout Novinky/Blog přímo pod mapu škol.** Pořadí sekcí musí odpovídat nové struktuře stránky. |
| HP-05 | P2 | UI, Obsah | Úprava | **Zjednodušit sekci partnerů.** Sjednotit prezentaci log, omezit počet vizuálních úrovní a potvrdit pořadí/kategorie partnerů. |
| HP-06 | P1 | IA | Přesun | **Přesunout Kontakt úplně dolů.** Kontakt bude poslední obsahová sekce před footerem; Novinky už nesmí být až za kontaktem. |
| HP-07 | P1 | IA, Obsah | Přesun | **Začlenit „Mezinárodně uznávaný program“ do sekce O programu.** Odstranit samostatnou globální sekci a zachovat její důležité informace uvnitř sekce `#program`. |
| HP-08 | P1 | IA | Úprava | **Odstranit citaci z homepage.** Samostatná citace učitelky se na homepage nebude zobrazovat. |
| HP-09 | P1 | IA, Funkce | Úprava | **Upravit hlavní navigaci.** Položky „Vynálezy“ a „Novinky“ v hlavní liště povedou na kotvy příslušných sekcí homepage (`#vynalezy`, `#novinky`). Na samostatné stránky `/vynalezy` a `/novinky` povedou tlačítka uvnitř sekcí. Platí i pro mobilní menu. |
| HP-10 | P1 | Obsah, UI | Úprava | **Zobrazit jen tři nejnovější novinky a doplnit datum.** Data řadit od nejnovějších; každá karta musí zobrazit samostatné datum publikace, ne datum ukryté ve štítku. |
| HP-11 | P1 | Funkce, Integrace | Úprava | **Přepracovat kontaktní formulář a skutečně jej odesílat e-mailem.** Pole: jméno, příjmení, e-mail, název organizace a povinný vzkaz. Odstranit checkbox „Ano, chci se přihlásit“. Tlačítko: „Odeslat zprávu“. Doplnit validaci, stav odesílání, potvrzení úspěchu, chybový stav a ochranu proti spamu. |
| HP-12 | P1 | Integrace, UI | Nové | **Přidat přihlášení k newsletteru.** Určit umístění, povinná pole, poskytovatele newsletteru, potvrzovací proces a text souhlasu se zpracováním údajů. |

## 2. Chci se zapojit

| ID | Priorita | Typ | Stav | Zadání a podmínka dokončení |
|---|---:|---|---|---|
| ZS-01 | P1 | IA, UI | Úprava | **Zjednodušit horní část stránky.** Odstranit plnou hlavičku/navigaci a ponechat jasný proklik zpět na homepage, ideálně přes logo se srozumitelným popisem. |
| ZS-02 | P0 | Obsah, Funkce | Nové | **Navrhnout vlastní formulář pro každou cílovku.** Připravit samostatná pole, texty, validaci a cílového příjemce pro školu, vysokoškoláka a firmu. Formuláře napojit na odesílání a evidenci leadů. |
| ZS-03 | P0 | Obsah, UI | Nové | **Přidat autentickou citaci pro každou cílovku.** Dodat znění citace, jméno, roli/organizaci, souhlas s publikací a případnou fotografii pro školu, vysokoškoláka i firmu. |
| ZS-04 | P1 | UI, Funkce | Úprava | **Zvýraznit přepínání cílovek.** Současné záložky škola / vysokoškolák / firma zachovat nebo přepracovat tak, aby bylo na první pohled zřejmé, že jsou interaktivní, která volba je aktivní a že existují tři různé cesty zapojení. |
| ZS-05 | P1 | IA | Přesun | **Přesunout společné vysvětlení rolí nahoru.** Sekci „Jak vaše role zapadá“, která je dnes pod všemi panely, umístit před výběr cílovky a formuláře. |
| ZS-06 | P1 | Funkce, IA | Úprava | **Nahradit CTA „Přihlásit školu“ vloženým formulářem.** Školní formulář se zobrazí přímo v panelu školy; nebude odkazovat na obecný kontakt na homepage. Stejný princip sladit s formuláři dalších cílovek dle ZS-02. |
| ZS-07 | P1 | Obsah, UI | Nové | **Přidat social proof.** Zobrazit ověřená čísla, například počet zapojených škol, dětí, studentů, firem a realizovaných vynálezů. Uvést ročník nebo období, ke kterému se údaje vztahují. |

## 3. Vynálezy

| ID | Priorita | Typ | Stav | Zadání a podmínka dokončení |
|---|---:|---|---|---|
| VY-01 | P1 | Obsah, UI | Nové | **Přidat infografiku aktuálního ročníku.** Převzít relevantní čísla z homepage, doplnit ročník/období a vizuálně je zasadit do stránky Vynálezy. |
| VY-02 | P1 | Obsah, UI | Úprava | **Dát větší prostor autorům vynálezů.** Vedle škol a patronů zobrazit konkrétní autory/týmy; určit potřebná jména, role, fotografie a souhlasy s publikací. |
| VY-03 | P1 | UI, Funkce | Úprava | **Přepracovat galerii.** Místo současného velkého carouselu zobrazit dvě miniatury vedle sebe. Miniatury musí být zvětšitelné do popupu/lightboxu, ovladatelné klávesnicí, zavřitelné přes `Esc` a použitelné na mobilu. |
| VY-04 | P2 | IA, Funkce | Úprava | **Zachovat a sladit spodní prokliky na zapojení.** Stránka už obsahuje tři CTA na školu, vysokoškoláka a firmu. Po nasazení nových formulářů musí odkazy otevřít správnou cílovku a dovést uživatele přímo k jejímu formuláři. |

## 4. Blog / Novinky

| ID | Priorita | Typ | Stav | Zadání a podmínka dokončení |
|---|---:|---|---|---|
| BL-01 | P0 | Obsah, IA | Rozhodnout | **Navrhnout a přidat rubriky.** Současné rubriky jsou pouze „Novinky“ a „O projektu“. Připravit finální seznam, pravidla zařazování článků a způsob filtrace. |
| BL-02 | P1 | UI, Funkce | Úprava | **Udělat klikatelnou celou kartu článku.** Hover/focus musí jasně ukázat interaktivitu; karta musí být přístupná klávesnicí. Samostatný button „Číst článek“ nemá být jedinou klikací plochou. |
| BL-03 | P1 | UI | Úprava | **Nastavit detail článku jako tmavou variantu.** Dnes existuje přepínač světlé/tmavé varianty a výchozí je světlá. Potvrdit, zda tmavá bude pevná bez přepínače, nebo pouze výchozí. |
| BL-04 | P1 | Obsah, UI | Úprava | **Rozšířit formátování článků.** Citace už existují; doplnit samostatné CTA bloky a sjednotit sazbu citací. Připravit opakovaně použitelné obsahové bloky, aby je později bylo možné spravovat přes CMS. |

## 5. Společné technické a obsahové závislosti

Tyto body nejsou nové požadavky, ale musí být vyřešeny, aby šel backlog dokončit bez provizorií.

| ID | Navazuje na | Potřebné rozhodnutí nebo podklad |
|---|---|---|
| DEP-01 | HP-11, ZS-02, ZS-06 | Zvolit způsob odesílání formulářů, cílové e-mailové adresy, evidenci leadů, spam ochranu a retenční pravidla osobních údajů. |
| DEP-02 | HP-12 | Zvolit newsletterovou platformu a potvrdit double opt-in, text souhlasu a odkaz na zásady ochrany osobních údajů. |
| DEP-03 | HP-03 | Dodat autoritativní seznam škol, typ školy, adresu/souřadnice, případně odkaz a pravidlo pro seskupování bodů. |
| DEP-04 | HP-10, BL-01, BL-04 | Rozhodnout, zda obsah zůstane dočasně v lokálních TypeScript souborech, nebo se rovnou napojí CMS. |
| DEP-05 | ZS-03, ZS-07, VY-01, VY-02 | Dodat a schválit citace, fotografie, jména autorů a ověřená čísla včetně období platnosti. |
| DEP-06 | HP-05 | Potvrdit aktuální seznam partnerů, jejich kategorie, pořadí a platné podoby log. |
| DEP-07 | HP-01, ZS-02 | Dodat finální argumentaci a obsah formulářů pro školu, vysokoškoláka a firmu. |

## 6. Doporučené pořadí realizace

1. **Obsahová a produktová rozhodnutí:** HP-01, ZS-02, ZS-03, BL-01 a závislosti DEP-01 až DEP-07.
2. **Struktura a navigace:** HP-04, HP-06 až HP-09, ZS-01, ZS-04 a ZS-05.
3. **Klíčové konverzní cesty:** HP-11, HP-12, ZS-02, ZS-06 a návaznost VY-04.
4. **Homepage:** HP-02, HP-03, HP-05 a HP-10.
5. **Zapojení a důvěryhodnost:** ZS-03 a ZS-07.
6. **Vynálezy:** VY-01 až VY-03.
7. **Blog:** BL-02 až BL-04 a realizace rubrik z BL-01.
8. **Regresní kontrola:** responzivita, klávesnice, formuláře, interní odkazy, metadata, výkon mapy a build.

## 7. Souhrn rozsahu

- Homepage: **12 úkolů**
- Chci se zapojit: **7 úkolů**
- Vynálezy: **4 úkoly**
- Blog / Novinky: **4 úkoly**
- Společné závislosti: **7 bodů**
- Celkem: **27 realizačních úkolů**

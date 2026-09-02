import type { Lang } from "@/lib/i18n"

const sv = {
  heading: "Vanliga frågor",
  items: [
    {
      q: "Hur tar jag DYGN?",
      a: "En sachet om dagen, upplöst i ett glas kallt vatten (cirka 200 ml). Ta den när det passar dig. De flesta väljer morgonen för att bygga vanan. Smaken är mild citrus: utan socker, lätt sötad med sukralos.",
    },
    {
      q: "Varför bara åtta näringsämnen?",
      a: "För att fler inte är bättre. Vi har valt näringsämnen där tre kriterier möts: tydlig vetenskaplig evidens, dokumenterat vanliga brister i nordisk kost, och former med dokumenterat upptag som håller i pulver. Ett multivitamin med 25 ingredienser i verkningslösa doser ser bra ut på etiketten men gör ingen skillnad i kroppen.",
    },
    {
      q: "Kommer jag känna någon skillnad?",
      a: "Förmodligen inte, och det är ett ärligt svar. Grundnäring arbetar långsiktigt och syns i blodprov, inte i hur veckan känns. Undantaget är magnesium: ligger du lågt kan sömnen bli bättre efter några veckor. Vill du se effekten, mät till exempel D-vitamin och homocystein före och efter tre månader.",
    },
    {
      q: "Kan jag ta DYGN tillsammans med andra kosttillskott eller läkemedel?",
      a: "DYGN innehåller måttfulla doser som är utformade för att komplettera en normal kost. Tar du blodförtunnande läkemedel (särskilt warfarin) bör du prata med din läkare på grund av K2-innehållet. Detsamma gäller vid sköldkörtelmedicinering på grund av jod.",
    },
    {
      q: "Är DYGN veganskt?",
      a: "Ja. Vitamin D3 är vegansk kolekalciferol, framställd utan lanolin, och samtliga övriga ingredienser är växtbaserade eller syntetiskt framställda utan animaliska källor.",
    },
    {
      q: "Vilken returpolicy gäller?",
      a: "30 dagars öppet köp, även på öppnade förpackningar. Är du inte nöjd mejlar du oss så återbetalar vi hela beloppet. Vi tror på produkten och tar hellre risken än att du ska behöva ta den.",
    },
    {
      q: "Hur fungerar prenumerationen?",
      a: "En ny förpackning levereras var 30:e dag till 20% lägre pris. Du kan pausa, hoppa över en leverans eller avsluta när som helst, utan bindningstid, direkt från ditt konto eller via mejl.",
    },
    {
      q: "Var tillverkas DYGN?",
      a: "DYGN tillverkas i Sverige, hos en HACCP-certifierad tillverkare som följer GMP och gör flera av Sveriges mest kända kosttillskott. Varje produktion testas dessutom av oberoende Eurofins för tungmetaller och mikrobiologisk säkerhet. Kvaliteten kontrolleras alltså flera gånger: av tillverkaren, av oss och av oberoende labb.",
    },
  ],
}

const en: typeof sv = {
  heading: "Frequently asked questions",
  items: [
    {
      q: "How do I take DYGN?",
      a: "One sachet a day, dissolved in a glass of cold water (about 200 ml). Take it whenever suits you. Most people choose the morning to build the habit. The taste is mild citrus: no sugar, lightly sweetened with sucralose.",
    },
    {
      q: "Why only eight nutrients?",
      a: "Because more is not better. We have chosen nutrients where three criteria meet: clear scientific evidence, documented common deficiencies in the Nordic diet, and forms with documented absorption that hold up in powder. A multivitamin with 25 ingredients in ineffective doses looks good on the label but makes no difference in the body.",
    },
    {
      q: "Will I feel any difference?",
      a: "Probably not, and that is an honest answer. Foundational nutrition works over the long term and shows up in blood tests, not in how your week feels. The exception is magnesium: if your levels are low, sleep may improve after a few weeks. If you want to see the effect, measure vitamin D and homocysteine, for example, before and after three months.",
    },
    {
      q: "Can I take DYGN together with other supplements or medicines?",
      a: "DYGN contains moderate doses designed to complement a normal diet. If you take blood-thinning medication (especially warfarin), you should talk to your doctor because of the K2 content. The same applies to thyroid medication because of the iodine.",
    },
    {
      q: "Is DYGN vegan?",
      a: "Yes. Vitamin D3 is vegan cholecalciferol, produced without lanolin, and all other ingredients are plant-based or synthetically produced without animal sources.",
    },
    {
      q: "What is the return policy?",
      a: "30-day money-back guarantee, even on opened packs. If you are not satisfied, email us and we will refund the full amount. We believe in the product and would rather take the risk than have you take it.",
    },
    {
      q: "How does the subscription work?",
      a: "A new pack is delivered every 30 days at a 20% lower price. You can pause, skip a delivery or cancel at any time, with no commitment, directly from your account or by email.",
    },
    {
      q: "Where is DYGN made?",
      a: "DYGN is made in Sweden, at a HACCP-certified manufacturer that follows GMP and makes several of Sweden’s best-known supplements. Every batch is also tested by the independent lab Eurofins for heavy metals and microbiological safety. Quality is therefore checked several times: by the manufacturer, by us and by an independent lab.",
    },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }

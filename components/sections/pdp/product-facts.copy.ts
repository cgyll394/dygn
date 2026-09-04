import type { Lang } from "@/lib/i18n"

const sv = {
  srHeading: "Produktfakta och näringsinnehåll",
  detailsHeading: "Produktfakta",
  details: [
    { label: "Portionsstorlek", value: "1 sachet (5 g)" },
    { label: "Portioner per förpackning", value: "30" },
    { label: "Format", value: "Pulver, löses i vatten" },
    { label: "Smak", value: "Mild citrus, utan tillsatt socker" },
    { label: "Energi", value: "0 kcal, 0 g socker" },
    { label: "Kost", value: "Vegansk, glutenfri" },
    { label: "Tillverkning", value: "Sverige" },
  ],
  nutritionHeading: "Näringsinnehåll",
  perSachet: "Per sachet",
  columns: { nutrient: "Näringsämne", amount: "Mängd", share: "Andel av referensintag" },
  nutrition: [
    { name: "Vitamin D3 (vegansk kolekalciferol)", dose: "2000 IE / 50 µg", dri: "1000 %" },
    { name: "Vitamin K2 (menakinon-7, MK-7)", dose: "180 µg", dri: "240 %" },
    { name: "Vitamin B12 (cyanokobalamin)", dose: "100 µg", dri: "4 000 %" },
    { name: "Folat (L-metylfolat)", dose: "400 µg", dri: "200 %" },
    { name: "Magnesium (bisglycinat)", dose: "200 mg", dri: "53 %" },
    { name: "Kalium (citrat)", dose: "400 mg", dri: "20 %" },
    { name: "Zink (pikolinat)", dose: "10 mg", dri: "100 %" },
    { name: "Jod (natriumjodid)", dose: "150 µg", dri: "100 %" },
  ],
  footnote:
    "% avser dagligt referensintag (DRI) för vuxna. Ingredienser: magnesiumbisglycinat, surhetsreglerande medel: citronsyra (E330), kaliumcitrat, isomalt, aromer, zinkpikolinat, vitamin D3 (vegansk kolekalciferol), sötningsmedel: steviolglykosider (E960a), natriumjodid, folat (L-metylfolat), vitamin K2 (menakinon-7), vitamin B12 (cyanokobalamin). Färdig produkt kontrolleras mot gränsvärden för bland annat salmonella, listeria och tungmetaller.",
}

const en: typeof sv = {
  srHeading: "Product facts and nutrition information",
  detailsHeading: "Product facts",
  details: [
    { label: "Serving size", value: "1 sachet (5 g)" },
    { label: "Servings per pack", value: "30" },
    { label: "Format", value: "Powder, dissolves in water" },
    { label: "Flavour", value: "Mild citrus, no added sugar" },
    { label: "Energy", value: "0 kcal, 0 g sugar" },
    { label: "Diet", value: "Vegan, gluten-free" },
    { label: "Manufactured in", value: "Sweden" },
  ],
  nutritionHeading: "Nutrition information",
  perSachet: "Per sachet",
  columns: { nutrient: "Nutrient", amount: "Amount", share: "% NRV" },
  nutrition: [
    { name: "Vitamin D3 (vegan cholecalciferol)", dose: "2000 IU / 50 µg", dri: "1000 %" },
    { name: "Vitamin K2 (menaquinone-7, MK-7)", dose: "180 µg", dri: "240 %" },
    { name: "Vitamin B12 (cyanocobalamin)", dose: "100 µg", dri: "4 000 %" },
    { name: "Folate (L-methylfolate)", dose: "400 µg", dri: "200 %" },
    { name: "Magnesium (bisglycinate)", dose: "200 mg", dri: "53 %" },
    { name: "Potassium (citrate)", dose: "400 mg", dri: "20 %" },
    { name: "Zinc (picolinate)", dose: "10 mg", dri: "100 %" },
    { name: "Iodine (sodium iodide)", dose: "150 µg", dri: "100 %" },
  ],
  footnote:
    "% refers to the daily nutrient reference value (NRV) for adults. Ingredients: magnesium bisglycinate, acidity regulator: citric acid (E330), potassium citrate, isomalt, flavourings, zinc picolinate, vitamin D3 (vegan cholecalciferol), sweetener: steviol glycosides (E960a), sodium iodide, folate (L-methylfolate), vitamin K2 (menaquinone-7), vitamin B12 (cyanocobalamin). The finished product is checked against limit values for, among other things, salmonella, listeria and heavy metals.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }

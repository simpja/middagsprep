import { RecipeType } from "./types";
import kyllingformImage from "../assets/images/kyllingform.png";

export const kyllingform: RecipeType = {
  id: 2,
  name: "Kyllingform",
  description:
    "En ildfast form er improvisatørens beste venn sies det. Denne oppskriften er ment som et forslag, der man i prinsippet kan bytte ut alt. Det kan være en fordel å ha noe fingerspitzgefühl for hvor lang steketid ulike ingredienser trenger, men det vil ha mindre å si i en ildfast form enn i en stekepanne. Denne retten kan du gjøre klar for steking dagen i forveien, men kutt da potetene i mindre biter eller skiver for å redusere steketiden og risiko før tørr kylling.",
  ingredients: [
    { amount: 400, unit: "g", name: "Lårfilet av kylling" },
    { amount: 6, unit: "stk", name: "Poteter" },
    { amount: 1, unit: "stk", name: "Gul løk" },
    { amount: 1, unit: "stk", name: "Paprika" },
    { amount: 2, unit: "fedd", name: "Hvitløk" },
    { amount: 0.5, unit: "stk", name: "Chili" },
    { amount: 1, unit: "ts", name: "havsalt" },
    { amount: 1, unit: "ts", name: "kvernet pepper" },
    { amount: 1, unit: "dl", name: "Creme fraiche" },
    { amount: 2, unit: "ss", name: "Soyasaus" },
  ],
  instructions: [
    "Sett ovnen på 200 grader",
    "Del opp poteter i store terninger, og ha det i den ildfaste formen. Snu inn litt olje, salt og pepper, og sett i ovnen mens du kutter resten av ingrediensene.",
    "Del opp kyllingen i biter, ha det i en bolle med litt olje, salt og pepper. Bland godt.",
    "Kutt opp løk og paprika, finhakk chili og hvitløk.",
    "Bland sammen creme fraiche og soyasaus til en enkel marinade.",
    "Ta ut den ildfaste formen, og ha i kyllingen og grønnsakene. Bland godt.",
    "Ha over marinaden og sett formen tilbake i ovnen i 20 minutter.",
    "Server!",
  ],
  image: kyllingformImage,
  tags: ["Enkel", "30 min", "Klar til steking"],
};

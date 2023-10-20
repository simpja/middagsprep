import { RecipeType } from "./types";
import gronnsaksbologneseImage from "../assets/images/gronnsaksbolognese.png";

export const gronnsaksbolognese: RecipeType = {
  id: 1,
  name: "Grønnsaksbolognese",
  description:
    "En klassiker og favoritt for mange! Her har vi laget en kjøttfri variant basert på mange av de samme smakene. Kjøttdeig er byttet ut med røde linser som er fulle av protein, kostfiber og jern.",
  ingredients: [
    { amount: 1, unit: "stk", name: "Gul løk" },
    { amount: 2, unit: "fedd", name: "Hvitløk" },
    { amount: 0.5, unit: "stk", name: "Stangselleri" },
    { amount: 2, unit: "stk", name: "Gulrøtter" },
    { amount: 4, unit: "ss", name: "Olivenolje" },
    { amount: 2, unit: "stk", name: "Grønnsakbuljong terninger" },
    { amount: 400, unit: "g", name: "Tomater hakkede" },
    { amount: 2, unit: "ss", name: "Ketchup" },
    { amount: 400, unit: "g", name: "spaghetti" },
    { amount: 1, unit: "dl", name: "Kremfløte" },
    { amount: 360, unit: "g", name: "røde linser" },
    { amount: 1, unit: "ts", name: "havsalt" },
    { amount: 1, unit: "ts", name: "kvernet pepper" },
  ],
  instructions: [
    "Vask, rens og finhakk løk, hvitløk, stangselleri og gulrot. Varm opp en gryte med litt olje til middels varme og tilsett grønnsakene. Fres til de blir blanke.",
    "Knus buljongterning og ha i gryten med hermetiske tomater og ketchup. La det småkoke i ca. 10 minutter.",
    "Tilbered spaghetti etter anvisning på pakken i mellomtiden.",
    "Ha til slutt kremfløte og linser i gryten med grønnsaksbolognese. Kok opp og smak til med salt og pepper.",
    "Server spaghetti med grønnsaksbolognese. Dryss over finhakket persille.",
  ],
  image: gronnsaksbologneseImage,
  tags: ["Enkel", "25 min", "Delvis prep"],
};

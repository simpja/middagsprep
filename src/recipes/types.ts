export interface RecipeType {
  id: number;
  name: string;
  description: string;
  ingredients: IngredientType[];
  instructions: string[];
  image: string;
  tags: string[];
}

export interface IngredientType {
  amount: number;
  unit: string;
  name: string;
}

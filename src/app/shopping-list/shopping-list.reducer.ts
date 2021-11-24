import { IngredientModel } from "../shared/ingredient.model";

const initialState = {
  ingredients: [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action) {}

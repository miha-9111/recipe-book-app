import { IngredientModel } from "../shared/ingredient.model";
import * as shoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: shoppingListActions.addIngredient) {
  switch (action.type) {
    case shoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
  }
}

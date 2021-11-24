import { IngredientModel } from "../shared/ingredient.model";
import { Action } from "@ngrx/store";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class addIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: IngredientModel;
}

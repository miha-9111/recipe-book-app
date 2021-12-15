import { createAction, props } from '@ngrx/store';
import { RecipeModel } from "../recipe.model";

export const addRecipe = createAction(
  '[Recipes] Add Recipe',
  props<{
    recipe: RecipeModel
  }>()
);

export const updateRecipe = createAction(
  '[Recipes] Update Recipe',
  props<{
    index: number,
    recipe: RecipeModel
  }>()
);

export const deleteRecipe = createAction(
  '[Recipes] Delete Recipe',
  props<{
    index: number
  }>()
);

export const setRecipes = createAction(
  '[Recipes] Set Recipes',
  props<{
    recipes: RecipeModel[]
  }>()
);

export const fetchRecipes = createAction(
  '[Recipes] Fetch Recipes'
);

export const storeRecipes = createAction(
  '[Recipes] Store Recipes'
);

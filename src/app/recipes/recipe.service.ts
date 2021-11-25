import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { RecipeModel } from "./recipe.model";
import { IngredientModel } from "../shared/ingredient.model";

import { Store } from "@ngrx/store";
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://avatars.mds.yandex.net/get-zen_doc/3952334/pub_5fc653ff6d4e6a5c3f702dda_5fc65e15a093e94902050470/scale_1200',
  //   [
  //     new IngredientModel('Meat', 1),
  //     new IngredientModel('French Fries', 20)
  //   ]),
  //   new RecipeModel(
  //     'Big Fat Burger',
  //     'What else you need to say',
  //     'https://avatars.mds.yandex.net/get-zen_doc/3384370/pub_5ecad0598ab85d61ea0a0ab4_5ecad91f44070e5cfc491ede/scale_1200',
  //     [
  //       new IngredientModel('Buns', 2),
  //       new IngredientModel('Meat', 1)
  //     ])
  // ];

  private recipes: RecipeModel[] = [];

  constructor(private store: Store<fromShoppingList.AppState>) {}

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    // this.slService.addIngredientsNew(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

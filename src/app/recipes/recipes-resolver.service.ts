import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";

import { RecipeModel } from "./recipe.model";
import * as fromApp from "../store/app.reducer";
import * as RecipesActions from "../recipes/store/recipe.actions";

@Injectable({providedIn: "root"})
export class RecipesResolverService implements Resolve<RecipeModel[]>{
  constructor(private store: Store<fromApp.AppState>,
              private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const recipes = this.recipeService.getRecipes();
    // if (recipes.length === 0) {
    //   return this.dataStorageService.fetchRecipes();
    // } else {
    //   return recipes;
    // }
    this.store.dispatch(new RecipesActions.FetchRecipes());
    return this.actions$.pipe(
      ofType(RecipesActions.SET_RECIPES),
      take(1)
    );
  }
}

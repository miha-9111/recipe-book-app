import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, switchMap, take } from "rxjs/operators";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";

import { RecipeModel } from "./recipe.model";
import * as fromApp from "../store/app.reducer";
import * as RecipesActions from "../recipes/store/recipe.actions";

@Injectable({providedIn: "root"})
export class RecipesResolverService implements Resolve<{recipes: RecipeModel[]}>{
  constructor(private store: Store<fromApp.AppState>,
              private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.dataStorageService.fetchRecipes();
    return this.store.select('recipes').pipe(
      take(1),
      map(recipesState => {
        return recipesState.recipes;
      }),
      switchMap(recipes => {
        if (recipes.length === 0) {
          this.store.dispatch(RecipesActions.fetchRecipes());
          return this.actions$.pipe(
            ofType(RecipesActions.setRecipes),
            take(1)
          );
        } else {
          return of({recipes});
        }
      })
    );
  }
}

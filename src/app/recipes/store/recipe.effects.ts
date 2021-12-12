import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs/operators";

import { RecipeModel } from "../recipe.model";
import * as RecipesActions from "./recipe.actions";

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http
        .get<RecipeModel[]>(
          'https://ng-complete-guide-55c34-default-rtdb.firebaseio.com/recipes.json',
        );
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  constructor(private actions$: Actions,
              private http: HttpClient) {}
}

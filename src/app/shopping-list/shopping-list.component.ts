import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { IngredientModel } from "../shared/ingredient.model";
import * as ShoppingListActions from "./store/shopping-list.actions";
import * as fromApp from "../store/app.reducer";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: IngredientModel[] }>
  // ingredients: IngredientModel[];
  // private igChangeSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.igChangeSub = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: IngredientModel[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(ShoppingListActions.startEdit({index}));
  }
}

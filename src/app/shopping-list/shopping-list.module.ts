import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

import * as fromShoppingList from './store/shopping-list.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    StoreModule.forFeature('shoppingList', fromShoppingList.shoppingListReducer),
    SharedModule
  ]
})
export class ShoppingListModule {}

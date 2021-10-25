import { Component, OnInit } from '@angular/core';

import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test', 'https://www.saveur.com/app/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg'),
    new RecipeModel('A Test Recipe', 'This is simply a test', 'https://www.saveur.com/app/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

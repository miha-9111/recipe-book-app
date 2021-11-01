import {RecipeModel} from "./recipe.model";

export class RecipeService {
  private recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test', 'https://www.saveur.com/app/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg'),
    new RecipeModel('A Test Recipe 2', 'This is simply a test 2', 'https://www.saveur.com/app/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

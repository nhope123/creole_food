import {
  getRecipeTitles,
  getLocal,
  uniqueRecipes,
  deleteFromLocal,
  deleteRecipe,
  addRecipe,
}
from '../sliceHelpers';
import {recipes} from '../recipes';

describe('getRecipeTitles()', function () {
  test("Get list of recipe titles", () => {
    let recipeList = [
      'PELAU', 'CURRIED GOAT', 'CURRIED CHICKEN','STEWED CHICKEN',
      'OVEN BARBECUED CHICKEN','SHEPHERD\'S PIE'
    ];
    expect(getRecipeTitles(recipes)).toEqual(recipeList);
  });
});

describe('deleteRecipe()', function () {
  test("Remove PELAU from recipe list", () => {
    expect(deleteRecipe(recipes,'PELAU')).not.toContain(recipes[0]);
  });
  test("Remove CURRIED GOAT from recipe list", () => {
    expect(deleteRecipe(recipes,'CURRIED GOAT')).not.toContain(recipes[1]);
  });
  test("Remove CURRIED GOAT from recipe list", () => {
    expect(deleteRecipe(recipes,'CURRIED CHICKEN')).not.toContain(recipes[2]);
  });
});


/**
* @function getRecipeTitles
* @description -Take as parameter an array of recipes and return a list of recipes titles
* @param {array}  array: list of recipe objects
* @return {array} List of string titles
*/
export const getRecipeTitles = recipes =>{
  return recipes.map(item =>{
    return item.title
  });
}

/**
* @function getLocal
* @description -Takes no parameters, checks Local storage for recipes, return recipes
* if found, otherwise create default recipe storage
* @return {array} recipe list
*/
export const getLocal = ()=>{
  return (localStorage.recipe)? JSON.parse(localStorage.getItem('recipe')): null;
}

/**
* @function niqueRecipes
* @description -Takes two recipe list and return a list of recipes base on unique titles.
* @param {array} firstList - A list of recipes for comparison.
* @param {array} secondList - A list of recipes for comparison.
* @return {array} A list of unique recipes.
*/
export const uniqueRecipes = (firstList, secondList) =>{
   let unique = [...firstList];
   let nameList = getRecipeTitles(firstList) ;
   secondList.map(item =>{
     if(!nameList.includes(item.title)){
       unique.push(item);
       nameList.push(item.title);
     }
     return ''
   })
   return unique;
}

/**
* @function deleteFromLocal
* @description - Takes as parameter a recipe title, check localStorage for existence and delete the recipe.
* @param {string} title - The title of the recipe to delete.
*/
export const deleteFromLocal = (title) =>{
  if(getLocal()){
    localStorage.setItem('recipe', deleteRecipe( getLocal(), title ))
  }
}

/**
* @function deleteRecipe
* @deescription - This function deletes a recipe from a list of recipes.
* @param {array} recipeList - A list of recipes
* @param {string} title - A string of the recipe title to delete
* @return {array} A list of recipes excluding the titled recipe.
*/
export const deleteRecipe = (recipeList,title) =>{
  return recipeList.filter((item) => {return (item.title !== title)})
}

/**
* @function addRecipe
* @description This fuction adds a recipe to the local storage.
* @param {object} recipe - The recipe to be added to the local storage.
*/
export const addRecipe = (recipe) =>{
  let localValue;
  if(getLocal()){
    localValue = uniqueRecipes([recipe],getLocal())
    localStorage.setItem('recipe',JSON.stringify(localValue))
  }else{
    localStorage.setItem('recipe',JSON.stringify([recipe]))
  }
}

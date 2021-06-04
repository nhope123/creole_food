
/*
  getRecipeTitles take as parameter an array of recipes and return a list of recipes titles
  array: list of recipe objects
  return: list of string titles
*/
export const getRecipeTitles = array =>{
  return array.map(item =>{
    return item.title
  });
}

/*
  getLocal takes no parameters, checks Local storage for recipes, return recipes
  if found, otherwise create default recipe storage
  return recipe list
*/
export const getLocal = ()=>{
  return (localStorage.recipe)? JSON.parse(localStorage.getItem('recipe')): null;
}

/*
  uniqueRecipes takes two recipe list and return a list of recipes base on
  unique titles
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

/*
  deleteFromLocal takes as parameter a recipe title, check localStorage for
  existence and delete the recipe
  No return value
*/
export const deleteFromLocal = (title) =>{
  if(getLocal()){
    localStorage.setItem('recipe', deleteRecipe( getLocal(), title ))
  }
}

/*
  deleteRecipe takes as parameters an array and a recipe title, it remove
  existing recipe of title and return the array.
  array: An array of recipes
  title: Recipe title
  return: Filtered array of recipes
*/
export const deleteRecipe = (array,title) =>{
  return array.filter((item) => {return (item.title !== title)})
}


export const addRecipe = (recipe) =>{
  let localValue;
  if(getLocal()){
    localValue = uniqueRecipes([recipe],getLocal())
    localStorage.setItem('recipe',JSON.stringify(localValue))
  }else{
    localStorage.setItem('recipe',JSON.stringify([recipe]))
  }
}

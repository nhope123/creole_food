const sample = [{
        name: 'DELAU',
        ingredients: [
          '3 lbs. chicken pieces, skinned',
          '1 tsp. salt',
          '1/2 tsp. black pepper',
          '2 tbsp. mixed green seasoning',
          '2 tsp. minced garlic',
          '1 tsp. Worcestershire sauce',
          '1 tsp. soy sauce',
          '1 tbsp. ketchup',
          '2 tbsp. vegetable oil',
          '2-3 tbsp. brown sugar',
          '2 cups parboiled rice',
          '1/2 cup chopped onion',
          '1/2 cup chopped sweet or pimento peppers',
          '1.5 cups cooked pigeon peas',
          '1 tbsp. salt',
          '1 whole hot pepper with the stem',
          '2 cups coconut milk',
          '2 cups chicken broth or water'
        ],
        directions: [
          ' Season chicken with salt, pepper, green seasoning, minced garlic, Worcestershire sauce, soy sauce and ketchup.',
          'Heat oil in a large heavy iron pot or skillet.',
          'Add sugar and allow to burn until brown.',
          'Add seasoned chicken and stir until pieces are well coated with burnt sugar, brown for 5 minutes.',
          'Add rice and turn often until well mixed. Cook for 3 minutes more.',
          'Add onion, sweet peppers and peas and cook for a few minutes, stirring a few times.',
          'Add salt, hot pepper, coconut milk and broth. Bring to the boil, lower heat, cover and simmer until nice is cooked and all liquid is evaporated (about 25-30 minutes.).',
          'Add more liquid if rice is still hard and continue to cook for few more minutes.'
        ],
        src: '/static/media/pelau.69cba4f4.webp',
        notes: 'Pelau could also be baked in an oven. Cover pot with tin foil and bake at 350°F for 30-35 minutes. Chopped carrots could also be added to pelau.',
        servingSize: 'Serves 8-10'
      },]

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
  if(localStorage.recipe){
    return JSON.parse(localStorage.getItem('recipe'))
  }else{
    localStorage.setItem('recipe',JSON.stringify(''));
    return ''
  }
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
    localValue = getLocal().unshift(recipe)
    localStorage.setItem('recipe',localValue)
  }else{
    localStorage.setItem('recipe',JSON.stringify([{...recipe}]))
  }
}

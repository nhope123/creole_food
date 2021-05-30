import {createSlice} from '@reduxjs/toolkit';
import {recipes} from './recipes';

const getRecipeTitles = array =>{
  return array.map(item =>{
    return item.name
  });
}

//console.log(recipes);
const initialState = {
  recipe: [...recipes],
  recipe_list: getRecipeTitles(recipes),
  detail: recipes[0],
};

//console.log(initialState);


const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers:{
    displayRecipe:{
      reducer: (state, action)=>{
        // BUG: can't get state
        console.log(state.recipe.recipe_list);
        console.log(action.payload);

        state.detail = ''
      },
      prepare:(name)=>{
        return{payload: name}
      }
    }
  },
})

export const {displayRecipe} = recipeSlice.actions;
export default recipeSlice.reducer;

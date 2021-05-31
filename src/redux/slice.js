import {createSlice, current} from '@reduxjs/toolkit';
import {recipes} from './recipes';
import {getRecipeTitles, getLocal, uniqueRecipes} from './sliceHelpers';

const recipeData = (getLocal())? uniqueRecipes( getLocal(), recipes): recipes;

const initialState = {
  recipe: recipeData,
  recipe_list: getRecipeTitles(recipeData),
  detail: recipeData[0],
  deleteModal: false,
};



const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers:{
    displayRecipe:{
      /* Display the recipe selected */
      reducer: (state, action)=>{
        state.detail = state.recipe.find((item)=>{
          return (item.name === action.payload)
        })
      },
      prepare:(name)=>{
        return{payload: name}
      }
    },
    openDeleteModel: (state)=>{
      state.deleteModal = true
    },
    closeDeleteModel: (state)=>{
      state.deleteModal = false
    },
    confirmDelete: (state)=>{
      // check local storage for item remove it


      //check state for item and remove it


      // BUG: deleting items
      if(getLocal()){
        console.log(getLocal())
      }
      else{console.log('no local');}

    }
  },
})

export const {displayRecipe, openDeleteModel, closeDeleteModel,confirmDelete} = recipeSlice.actions;
export default recipeSlice.reducer;

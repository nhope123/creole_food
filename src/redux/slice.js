import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {recipes} from './recipes';
import {
        getRecipeTitles,
        getLocal,
        uniqueRecipes,
        deleteFromLocal,
        deleteRecipe,
        addRecipe,
      } from './sliceHelpers';
import {pdfProcessing} from './pdf-load'

const recipeData = (getLocal())? uniqueRecipes( getLocal(), recipes): recipes;

const initialState = {
  recipe: recipeData,
  recipe_list: getRecipeTitles(recipeData),
  detail: recipeData[0],
  deleteModal: false,
};

export const downloadPDF = createAsyncThunk(
  'recipe/download',
  async (arg,thunkApi) =>{
    let response = await pdfProcessing(arg);
    return response
  }
)

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers:{
    displayRecipe:{
      /* Display the recipe selected */
      reducer: (state, action)=>{
        state.detail = state.recipe.find((item)=>{
          return (item.title === action.payload)
        })
      },
      prepare:(title)=>{
        return{payload: title}
      }
    },
    openDeleteModal: (state)=>{
      state.deleteModal = true
    },
    closeDeleteModal: (state)=>{
      state.deleteModal = false
    },
    confirmDelete: (state)=>{
      // check local storage for item remove it
      deleteFromLocal(state.detail.title)
      //check state for item and remove it, update state
      state.recipe = deleteRecipe(state.recipe, state.detail.title)
      state.detail = state.recipe[0]
      state.recipe_list = getRecipeTitles(state.recipe)
      state.deleteModal = false
    },
    updateRecipe:{
      reducer: (state, action) =>{
        addRecipe(action.payload)
        const data = uniqueRecipes( getLocal(), recipes)
        state.recipe = data
        state.recipe_list =  getRecipeTitles(data)
        state.detail = data[0]
      },
      prepare: (value) =>{
        return {payload: value}
      }
    }

  },
  extraReducers:{
    [downloadPDF.fulfilled]: (state,action)=>{
      console.log(action.payload);
    },
    [downloadPDF.rejected]: (state,action)=>{
      alert(`Error creating Pdf file of ${state.detail.title} recipe`)
      console.log(action.payload);
    }
  },
})

export const {
              displayRecipe, confirmDelete, openDeleteModal, closeDeleteModal,
              updateRecipe,
            } = recipeSlice.actions;
export default recipeSlice.reducer;

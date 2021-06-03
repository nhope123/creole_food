import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  servingSize: '8',
  ingredients: '',
  directions: '',
  image: '',
  notes: '',
  createRecipe: false,
};


const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    inputChange: {
      reducer: (state, action) =>{
        state[action.payload[0]] = action.payload[1]
      },
      prepare: (value, label) =>{
        return {payload:[label,value.target.value]}
      }
    },
    openCreateRecipe: (state)=>{
      state.createRecipe = true
    },
    closeCreateRecipe: (state)=>{
      state.title = ''
      state.servingSize = ''
      state.ingredients = ''
      state.directions = ''
      state.src = ''
      state.notes = ''
      state.createRecipe = false
    },
    openEditRecipe: {
      reducer: (state, action)=>{
        state.title = action.payload.title
        state.servingSize = action.payload.servingSize.split(' ')[1]
        state.ingredients = action.payload.ingredients.join(';')
        state.directions = action.payload.directions.join(';')
        state.src = action.payload.src
        state.notes = action.payload.notes
        state.createRecipe = true
      },
      prepare: (value) =>{
        return {payload: value}
      }
    },

  }
});

export const {inputChange, closeCreateRecipe, openCreateRecipe, openEditRecipe} = formSlice.actions;
export default formSlice.reducer;

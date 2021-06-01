import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  serving: '8',
  ingredients: '',
  directions: '',
  image: '',
  notes: '',
  createRecipe: true,
  editRecipe: false,
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
      state.serving = ''
      state.ingredients = ''
      state.directions = ''
      state.image = ''
      state.notes = ''
      state.createRecipe = false
    },

  }
});

export const {inputChange, closeCreateRecipe, openCreateRecipe, } = formSlice.actions;
export default formSlice.reducer;

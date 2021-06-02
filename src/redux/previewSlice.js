import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  activePreview: false,
  data: {}
};

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers:{
    setPreview: {
      reducer: (state, action) =>{
        state.activePreview = true
        state.data = action.payload
      },
      prepare: (value) =>{
        return {payload: value};
      }
    },
    unSetPreview: (state) =>{
      state.activePreview = false
      state.data = ''
    }
  }
});

export const {setPreview, unSetPreview} = previewSlice.actions;
export default previewSlice.reducer;

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  activePreview: false,
  data: {
      title: 'PELAU',
      ingredients: [
        '3 lbs. chicken pieces, skinned',
        '1 tsp. salt',

      ],
      directions: [
        ' Season chicken with salt',
        'Heat oil in a large heavy iron pot or skillet.',
      ],
      src: '/static/media/pelau.69cba4f4.webp',
      notes: '',
      servingSize: 'Serves 8'
    }
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

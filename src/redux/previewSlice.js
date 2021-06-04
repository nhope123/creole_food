import {createSlice} from '@reduxjs/toolkit'
/*data: {
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
    }*/
const dataValue = {
    title: '1',
    ingredients: [1],
    directions: [1],
    src: '1',
    notes: '1',
    servingSize: '1'
  }

const initialState = {
  activePreview: false,
  data: dataValue,
};

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers:{
    setPreview: {
      reducer: (state, action) =>{
        state.activePreview = true
        //state.data = initialState.data
        state.data = action.payload
      },
      prepare: (value) =>{
        return {payload: value};
      }
    },
    unSetPreview: (state) =>{
      state.activePreview = false
      state.data = dataValue
    },
    closePreview: (state) =>{

      state.activePreview = false
    }
  }
});

export const {setPreview, unSetPreview,closePreview} = previewSlice.actions;
export default previewSlice.reducer;

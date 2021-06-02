import {createStore, combineReducers} from  'redux';
import recipeReducer from './slice';
import formReducer from './formSlice';
import previewReducer from './previewSlice';

const store = createStore(
  combineReducers({
    recipe:recipeReducer,
    form: formReducer,
    preview: previewReducer,
  }),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;

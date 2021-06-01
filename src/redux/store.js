import {createStore, combineReducers} from  'redux';
import recipeReducer from './slice';
import formReducer from './formSlice'

const store = createStore(
  combineReducers({
    recipe:recipeReducer,
    form: formReducer,
  }),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;

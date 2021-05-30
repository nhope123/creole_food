import {createStore, combineReducers} from  'redux';
import recipeReducer from './slice';

const store = createStore(
  combineReducers({
    recipe:recipeReducer
  }),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;

import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import recipeReducer from './slice';
import formReducer from './formSlice';
import previewReducer from './previewSlice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    recipe:recipeReducer,
    form: formReducer,
    preview: previewReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;

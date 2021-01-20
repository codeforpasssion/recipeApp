import { createStore,applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { recipeReducer,searchReducer } from './reducers';
const rootReducer = combineReducers({
    recipe : recipeReducer,
    searchItem : searchReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
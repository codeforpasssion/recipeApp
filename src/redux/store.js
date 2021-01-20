import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { recipeReducer } from './reducers';

export const store = createStore(recipeReducer,composeWithDevTools(applyMiddleware(thunk)));
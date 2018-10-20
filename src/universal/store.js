import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const rootReducer = () => {}; //TODO

const createStoreWithMiddleware = (...middleware) =>
  composeWithDevTools(applyMiddleware(thunkMiddleware, ...middleware))(createStore);

export const configureStore = (initialState, ...middleware) =>
  createStoreWithMiddleware(...middleware)(rootReducer, initialState);

import Immutable from "immutable";
import { combineReducers } from "redux-immutable";
import { LOCATION_CHANGE, routerReducer as router } from "react-router-redux";
import app from "./app";

const initialRoutingState = Immutable.fromJS({
  locationBeforeTransitions: null
});

function defaultReducerFactory(defaultState) {
  return (state = defaultState) => state;
}

const reducers = combineReducers({
  app
});

export default reducers;

import React from "react";
import Immutable from "immutable";
import { renderClient } from "../renderer";
import routesFactory from "../universal/routes";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { configureStore } from "../universal/store";
import "./styles/main.scss";

const routes = routesFactory();

const state = Immutable.fromJS(window.__INITIAL_STATE__);
const history = createHistory();
const store = configureStore(state, routerMiddleware(history));

renderClient(store, routes, history);

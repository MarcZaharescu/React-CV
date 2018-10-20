import React from 'react';
import Immutable from 'immutable';
import { renderClient } from '../renderer';
import routesFactory from '../universal/routes';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { configureStore } from '../universal/store';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const config = {foo: 'bar'}
const routes = routesFactory(config);
console.log(routes);
const history = createHistory();
const state = Immutable.fromJS({});
//const store = configureStore(state, routerMiddleware(history));

console.log('Render client!');
renderClient(routes);

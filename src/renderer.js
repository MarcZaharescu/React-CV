import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

export const renderServer = (routes, context, history, sheet) =>
  ReactDOMServer.renderToString(
    sheet.collectStyles(
      <ConnectedRouter context={context} history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    )
  );

export const renderClient = (store, routes, history, context) => {
  console.log("rendering the client");
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter context={context} history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
  );
};

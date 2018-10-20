import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

export const renderServer =  ( routes ,context, history, sheet) =>
  ReactDOMServer.renderToString(
    sheet.collectStyles(
        <ConnectedRouter context={context} history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
    ),
  );

export const renderClient = (routes, context, history, ) => {
  console.log('rendering the client')
  ReactDOM.render(

       <BrowserRouter>

       {renderRoutes(routes)}

      </BrowserRouter>,
    document.getElementById('app'),
  );
};

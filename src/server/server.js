import path from "path";
import express from "express";
import routes from "./routes";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../../webpack.config.js";
import bodyParser from "body-parser";

const app = express();
const APP_PORT = 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(`/`, express.static("/Users/admin/dev/general/react-cv/src/public"));
app.use(routes);

app.listen(APP_PORT, error => {
  if (error) {
    console.error(error); // eslint-disable-line no-console
  } else {
    console.info("Listening on port %s.", APP_PORT); // eslint-disable-line no-console
  }
});

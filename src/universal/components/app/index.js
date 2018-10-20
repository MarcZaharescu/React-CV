import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div>{renderRoutes(this.props.route.routes)}</div>
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired
};

export default App;

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Header from "../header";
import About from "../about";
import Resume from "../resume";

export class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  renderNavigation() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/resume">RESUME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  render() {
    return (
      <div className="main-container">
        <header>
          <div className="nav">
            <div id="navigation-links" className="opaque">{this.renderNavigation()} </div>
          </div>

          <div className="row">
            <Header />
          </div>
        </header>
        <About />

        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired
};

export default App;

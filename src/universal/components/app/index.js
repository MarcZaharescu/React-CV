import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Header from "../header";
import Navigation from "../navigation";
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

    const navigationLinks = [{to:'/home', text:'HOME'}, {to:'/about', text:'ABOUT'},{to:'/resume', text:'RESUME'},{to:'/projects', text:'PROJECTS'},{to:'/contact', text:'CONTACT'}];


    return (
      <div className="main-container">
        <header>


          <Navigation links={navigationLinks}/>

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

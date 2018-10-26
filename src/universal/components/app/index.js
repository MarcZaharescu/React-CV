import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Home from "../home";
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
    const navigationLinks = [
      { to: "/home", text: "HOME" },
      { to: "/about", text: "ABOUT" },
      { to: "/resume", text: "RESUME" },
      { to: "/projects", text: "PROJECTS" },
      { to: "/contact", text: "CONTACT" }
    ];

    const homeProps ={
      name: "Marc",
      profession: "Software Engineer",
      location: "London",
      summary: "I'm currenly focusing on Node, React and Redux web applications."
    };

    const aboutProps ={
      aboutme: `I will update this about me section later. This is just an example text to
      see what it looks like to have some text here. About 3 lines. I will update this about me section later.
      This is just an example text to see what it looks like to have some text here. About 3 lines.`,
      name:   "Marc Zaharescu",
      city: "London",
      country: "United Kingdom",
      street: "22 Bletchley Street",
      postcode: "N1 7NX",
      phone: "+40752071299",
      email: "zaharescumarc10@gmail.com",
    };

    return (
      <div className="main-container">
        <header>
          <Navigation links={navigationLinks} />

          <div className="row">
            <Home name={homeProps.name}  profession={homeProps.profession} location={homeProps.location} summary={homeProps.summary}/>
          </div>
        </header>
        <About aboutme={aboutProps.aboutme} name={aboutProps.name} city={aboutProps.city} country={aboutProps.country} street={aboutProps.street} postcode={aboutProps.postcode} phone={aboutProps.phone} email={aboutProps.email} />
        <Resume/>

        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired
};

export default App;

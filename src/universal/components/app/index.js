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
import Projects from "../projects";
import Contact from "../contact";
import Footer from "../footer";
import data from "../../../data";

export class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const navigationLinks = data.common.navigationLinks;
    const homeProps = data.home.homeProps;
    const aboutProps = data.about.aboutProps;
    const educationElements = data.resume.educationElements;
    const workElements = data.resume.workElements;
    const skillsElements = data.resume.skillsElements;
    const projectProps = data.projects.projectProps;
    const contactProps = data.contact.contactProps;

    return (
      <div className="main-container">
        <header>
          <Navigation links={navigationLinks} />

          <div className="row">
            <Home
              name={homeProps.name}
              profession={homeProps.profession}
              location={homeProps.location}
              summary={homeProps.summary}
            />
          </div>
        </header>
        <About
          aboutme={aboutProps.aboutme}
          name={aboutProps.name}
          city={aboutProps.city}
          country={aboutProps.country}
          street={aboutProps.street}
          postcode={aboutProps.postcode}
          phone={aboutProps.phone}
          email={aboutProps.email}
        />
        <Resume
          education={educationElements}
          work={workElements}
          skills={skillsElements}
        />
        <Projects projects={projectProps} />
        <Contact contactDetails={contactProps} />
        <Footer />

        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired
};

export default App;

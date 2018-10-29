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

export class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const navigationLinks = [
      { to: "/home", text: "HOME" },
      { to: "/about", text: "ABOUT" },
      { to: "/resume", text: "RESUME" },
      { to: "/projects", text: "PROJECTS" },
      { to: "/contact", text: "CONTACT" }
    ];

    const homeProps = {
      name: "Marc",
      profession: "Software Engineer",
      location: "London",
      summary:
        "I'm currenly focusing on Node, React and Redux web applications."
    };

    const aboutProps = {
      aboutme: `I will update this about me section later. This is just an example text to
      see what it looks like to have some text here. About 3 lines. I will update this about me section later.
      This is just an example text to see what it looks like to have some text here. About 3 lines.`,
      name: "Marc Zaharescu",
      city: "London",
      country: "United Kingdom",
      street: "22 Bletchley Street",
      postcode: "N1 7NX",
      phone: "+40752071299",
      email: "zaharescumarc10@gmail.com"
    };

    const educationElements = [
      {
        school: "University of Birmingham",
        degree: "Artificial Intelligence with Computer-Science Bsc",
        year: "2013 - 2017",
        description: `Describe what I did here for about three lines. Describe what I
      did here for about three lines. Describe what I did here for
      about 2-3 lines`
      },
      {
        school: "Gheorghe Lazar National College",
        degree: "Maths with Computer-Science",
        year: "2009 - 2013",
        description: `Describe what I did here for about three lines. Describe what I
    did here for about three lines. Describe what I did here for
    about 2-3 lines`
      }
    ];

    const workElements = [
      {
        company: "Tesco Plc",
        title: "Software Engineer",
        year: "2017 - present",
        description: `Describe what I did here for about three lines. Describe what I
      did here for about three lines. Describe what I did here for
      about 2-3 lines`
      },
      {
        company: "Talmix Plc",
        title: "Data Analyst",
        year: "2016 - 2017",
        description: `Describe what I did here for about three lines.Describe what I
    did here for about three lines.Describe what I did here for
    about 2-3 lines`
      }
    ];

    const skillsElements = [
      {
        name: "JavaScript",
        level: "60%"
      },
      {
        name: "React",
        level: "30%"
      },
      {
        name: "NodeJs",
        level: "40%"
      },
      {
        name: "Redux",
        level: "30%"
      },

      {
        name: "Java",
        level: "50%"
      },
      {
        name: "AWS",
        level: "30%"
      },
      {
        name: "Git",
        level: "60%"
      }
    ];

    const projectProps = [
      {
        title: "Project1",
        image: "project1.png",
        description: "Description project1",
        href: "www.google.com"
      },
      {
        title: "Project2",
        image: "project2.png",
        description: "Description project2",
        href: "www.google.com"
      },
      {
        title: "Project3",
        image: "project3.png",
        description: "Description project3",
        href: "www.google.com"
      },
      {
        title: "Project4",
        image: "project4.png",
        description: "Description project4",
        href: "www.google.com"
      },
      {
        title: "Project5",
        image: "project2.png",
        description: "Description project5",
        href: "www.google.com"
      }
    ];

    const contactProps = [{}];

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

        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired
};

export default App;

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaDownload } from "@fortawesome/fontawesome-free-solid";

const About = props => {
  return (
    <section id="about-me">
      <div className="section-row">
        <div id="div-profile-picture" className="left-column">
          <img
            className="profile-picture"
            src={require("../../../public/images/profile-picture.png")}
            alt="Marc Zaharescu"
          />
        </div>
        <div className="right-column">
          <div id="div-about-me">
            <h2>About Me</h2>
            <p>
              {`I will update this about me section later. This is just an example text to
              see what it looks like to have some text here. About 3 lines. I will update this about me section later.
              This is just an example text to see what it looks like to have some text here. About 3 lines.`}
            </p>

            <div id="about-me-2-collumns">
              <div id="about-me-contact">
                <h2>Contact Details</h2>
                <p>
                  <span>{"Marc Zaharescu"}</span> <br />
                  <span>{"London, United Kingdom"}</span> <br />
                  <span>{"22 Bletchley Street"}</span> <br />
                  <span>{"N1 7BX"}</span> <br />
                  <span>{"+40752071299"}</span> <br />
                  <span>{"zaharescumarc10@gmail.com"}</span> <br />
                </p>
              </div>
              <div id="about-me-download">
                <div id="about-me-button">
                  <FontAwesomeIcon icon="download" size="2x" />
                  <span>Download Resume</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {};

export default About;

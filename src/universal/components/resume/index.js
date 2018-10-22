import React from "react";
import PropTypes from "prop-types";

const Resume = props => {
  return (
    <section id="resume">
      <div className="section-row">
        <div className="education-row">
          <div className="left-column">
            <h2>EDUCATION</h2>
            <hr />
          </div>
          <div className="right-column">
            <div>
              <h3> University of Birmingham </h3>
              <p>
                <span>Artificial Intelligence with Computer-Science Bsc</span>
                <span> * </span>
                <span>2013 - 2017</span>
              </p>
            </div>

            <div>
              <h3> Gheorghe Lazar National College </h3>
              <p>
                <span>Maths with Computer-Science Bsc</span>
                <span> * </span>
                <span>2009 - 2013</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Resume.propTypes = {};

export default Resume;

import React from "react";
import PropTypes from "prop-types";

const Resume = props => { 
  return (
    <section id="resume">
      <div className="section-row">
        <div className="resume-row">
          <div className="left-column">
            <h3>
              <span>EDUCATION</span>
            </h3>
          </div>
          <div className="right-column">
            <div>
              <h2> University of Birmingham </h2>
              <p className="resume-items">
                <span>Artificial Intelligence with Computer-Science Bsc</span>
                <span> • </span>
                <span>2013 - 2017</span>
              </p>
              <span>
                Describe what I did here for about three lines.Describe what I
                did here for about three lines.Describe what I did here for
                about 2-3 lines.{" "}
              </span>
            </div>

            <div>
              <h2> Gheorghe Lazar National College </h2>
              <p className="resume-items">
                <span>Maths with Computer-Science Bsc</span>
                <span> • </span>
                <span>2009 - 2013</span>
              </p>
              <span>
                Describe what I did here for about three lines. Describe what I
                did here for about three lines. Describe what I did here for
                about 2-3 lines.{" "}
              </span>
            </div>
                <div className="resume-separator"> <hr /></div>
          </div>


        </div>

        <div className="resume-row">
          <div className="left-column">
            <h3>
              <span>WORK</span>
            </h3>
          </div>
          <div className="right-column">
            <div>
              <h2> Tesco Plc </h2>
              <p className="resume-items">
                <span>Software Engineer</span>
                <span> • </span>
                <span>2017 - present</span>
              </p>
              <span>
                Describe what I did here for about three lines.Describe what I
                did here for about three lines.Describe what I did here for
                about 2-3 lines.{" "}
              </span>
            </div>

            <div>
              <h2> Talmix PLC </h2>
              <p className="resume-items">
                <span>Data Analyst</span>
                <span> • </span>
                <span>2016 - 2017</span>
              </p>
              <span>
                Describe what I did here for about three lines. Describe what I
                did here for about three lines. Describe what I did here for
                about 2-3 lines.{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="resume-separator"> <hr /></div>
        <div className="resume-row">
          <div className="left-column">
            <h3>
              <span>SKILLS</span>
            </h3>
          </div>
          <div className="right-column">
            <ul className="skills">
              <li>
                <h2> JavaScript</h2>
                <span> 10% </span>
              </li>
              <li>
                <h2> NodeJS</h2>
                <span> 60% </span>
              </li>
              <li>
                <h2> React</h2>
                <span> 70% </span>
              </li>
              <li>
                <h2> Redux</h2>
                <span> 50% </span>
              </li>
              <li>
                <h2> Java</h2>
                <span> 30% </span>
              </li>
              <li>
                <h2> Git</h2>
                <span> 20% </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-separator"> <hr /></div>
      </div>
    </section>
  );
};

Resume.propTypes = {};

export default Resume;

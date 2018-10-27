import React from "react";
import PropTypes from "prop-types";

const Resume = props => {
  const resumeSections = ["EDUCATION", "WORK", "SKILLS"];
  const educationElements = [
    {
      school: "University of Birmingham",
      degree: "Artificial Intelligence with Computer-Science Bsc",
      year: "2013 - 2017",
      description: `Describe what I did here for about three lines.Describe what I
    did here for about three lines.Describe what I did here for
    about 2-3 lines`
    },
    {
      school: "Gheorghe Lazar National College",
      degree: "Maths with Computer-Science",
      year: "2009 - 2013",
      description: `Describe what I did here for about three lines.Describe what I
  did here for about three lines.Describe what I did here for
  about 2-3 lines`
    }
  ];

  const workElements = [
    {
      company: "Tesco Plc",
      title: "Software Engineer",
      year: "2017 - present",
      description: `Describe what I did here for about three lines.Describe what I
    did here for about three lines.Describe what I did here for
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

   


  return (
    <section id="resume">
      <div className="section-row">
        {resumeSections.map(section => {
          return (
            <div className="resume-row">
              <div className="left-column">
                <h3>
                  <span>{section}</span>
                </h3>
              </div>
              {section == "EDUCATION"
                ? educationElements.map(education => {
                    return (
                      <div className="right-column">
                        <div>
                          <h2>{education.school}</h2>
                          <p className="resume-items">
                            <span>{education.degree}</span>
                            <span> • </span>
                            <span>{education.year}</span>
                          </p>
                          <span>{education.description}</span>
                        </div>
                      </div>
                    );
                  })
                : null}

              {section == "WORK"
                ? workElements.map(work => {
                    return (
                      <div className="right-column">
                        <div>
                          <h2>{work.company}</h2>
                          <p className="resume-items">
                            <span>{work.title}</span>
                            <span> • </span>
                            <span>{work.year}</span>
                          </p>
                          <span>{work.description}</span>
                        </div>
                      </div>
                    );
                  })
                : null}

                {section == "SKILLS"
                  ? skillsElements.map(skill => {
                      return (
                        <div className="right-column">
                          <ul className="skills">
                            <li>
                              <h2> {skill.name}</h2>
                              <span> {skill.level} </span>
                            </li>
                            </ul>
                        </div>
                      );
                    })
                  : null}
            </div>
          );
        })}
        </div>
    </section>
  );
};

Resume.propTypes = {};

export default Resume;

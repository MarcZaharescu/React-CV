import React from "react";
import PropTypes from "prop-types";

const Resume = props => {
  const resumeSections = ["EDUCATION", "WORK", "SKILLS"];
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

  const skills = skillsElements.map(skill => {
    return (
      <li className="skills__element">
        <h2 className="skills__element__name"> {skill.name}</h2>
        <span className="resume__element__description skills__element__level" style={{
            'padding-right': `${skill.level}`
        }}  >  </span>
      </li>
    );
  });

  const work = workElements.map(work => {
    return (
      <div className="resume__element-wrapper">
        <h2 className= "resume__element__title">{work.company}</h2>
        <p className="resume-items">
          <span className="resume__element__paragraph resume__element__headline">{work.title}</span>
          <span className="resume__element__paragraph">{"   •  "}</span>
          <span className="resume__element__paragraph">{work.year}</span>
        </p>
        <span className="resume__element__description">{work.description}</span>
      </div>
    );
  });

  const education = educationElements.map(education => {
    return (
      <div className="resume__element-wrapper">
        <h2 className= "resume__element__title">{education.school}</h2>
        <p className="resume-items">
          <span className="resume__element__paragraph resume__element__headline">{education.degree}</span>
          <span className="resume__element__paragraph">{"   •  "}</span>
          <span className="resume__element__paragraph">{education.year}</span>
        </p>
        <span className="resume__element__description">{education.description}</span>
      </div>
    );
  });


  return (
    <section id="resume">
      <div className="section-row">
        {resumeSections.map(section => {
          return (
            <div className="resume__section-wrapper">
              <div className="left-column">
                <h3 className="resume__section__title-wrapper">
                  <span className= "resume__section__title">{section}</span>
                </h3>
              </div>
              {section == "EDUCATION" ? (
                <div className="right-column">{education}</div>
              ) : null}

              {section == "WORK" ? (
                <div className="right-column">{work}</div>
              ) : null}

              {section == "SKILLS" ? (
                <div className="right-column">
                  <ul className="skills__section__wrapper">{skills}</ul>
                </div>
              ) : null}

                <hr className ="resume__section-separator"/>
            </div>


          );


        })}


      </div>
    </section>
  );
};

Resume.propTypes = {};

export default Resume;

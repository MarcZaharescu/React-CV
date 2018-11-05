import React from "react";
import PropTypes from "prop-types";

const Resume = ({ education, work, skills }) => {
  const resumeSections = ["EDUCATION", "WORK", "SKILLS"];
  const educationSection = education.map(education => {
    return (
      <div className="resume__element-wrapper">
        <h2 className="resume__element__title">{education.school}</h2>
        <p className="resume-items">
          <span className="resume__element__paragraph resume__element__headline">
            {education.degree}
          </span>
          <span className="resume__element__paragraph">•</span>
          <span className="resume__element__paragraph">{education.year}</span>
        </p>
        <span className="resume__element__description">
          {education.description}
        </span>
      </div>
    );
  });
  const workSection = work.map(work => {
    return (
      <div className="resume__element-wrapper">
        <h2 className="resume__element__title">{work.company}</h2>
        <p className="resume-items">
          <span className="resume__element__paragraph resume__element__headline">
            {work.title}
          </span>
          <span className="resume__element__paragraph">•</span>
          <span className="resume__element__paragraph">{work.year}</span>
        </p>
        <span className="resume__element__description">{work.description}</span>
      </div>
    );
  });
  const skillsSection = skills.map(skill => {
    return (
      <li className="skills__element">
        <h2 className="skills__element__name"> {skill.name}</h2>
        <span
          className="resume__element__description skills__element__level"
          style={{
            "padding-right": `${skill.level}`
          }}
          />
      </li>
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
                  <span className="resume__section__title">{section}</span>
                </h3>
              </div>
              {section == "EDUCATION" ? (
                <div className="right-column">{educationSection}</div>
              ) : null}

              {section == "WORK" ? (
                <div className="right-column">{workSection}</div>
              ) : null}

              {section == "SKILLS" ? (
                <div className="right-column">
                  <ul className="skills__section__wrapper">{skillsSection}</ul>
                </div>
              ) : null}

              <hr className="resume__section-separator" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

Resume.propTypes = {
  education: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired
};

export default Resume;

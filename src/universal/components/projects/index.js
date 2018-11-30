import React from "react";
import PropTypes from "prop-types";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <div className="section-row">
        <div className="projects__wrapper">
          <h2 className="projects__headline">
            {"Here are a few of my personal projects (more to be added soon)"}
          </h2>
          <div className="projects__element_wrapper">
            {projects.map(project => {
              return (
                <div className="projects__element">
                  <h2 className="projects__element__title">{project.title}</h2>
                  <div className="projects__element__image-wrapper">
                    <a href={project.href}>
                      <img
                        className="projects__element__image"
                        src={require(`../../../../public/images/${
                          project.image
                        }`)}
                      />

                      <div className="projects__element__image-overlay">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;

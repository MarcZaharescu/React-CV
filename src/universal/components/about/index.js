import React from 'react';
import PropTypes from 'prop-types'

const About = (props) => {
  console.log('Render About')
  return (
    <input
      type = "button"
      className = {'button input type'}
      value={4}
    />
  );
}

About.propTypes = {
}

export default About;

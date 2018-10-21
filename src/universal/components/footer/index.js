import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcons from 'react-social-media-icons';

const Footer = (props) => {
  return (
  <ul className="social-media">
    <SocialMediaIcons
      icons={props.icons}
      iconSize={'2.5em'}
      iconColor={'#ffffff'}
    />
  </ul>

  );
};

Footer.propTypes = {
  icons: PropTypes.array.isRequired
};

export default Footer;

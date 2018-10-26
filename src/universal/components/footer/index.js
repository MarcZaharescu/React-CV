import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcons from 'react-social-media-icons';

const Footer = ({icons,size}) => {
  return (
  <ul className="social-media">
    <SocialMediaIcons
      icons={icons}
      iconSize={size}
      iconColor={'#ffffff'}
    />
  </ul>

  );
};

Footer.propTypes = {
  icons: PropTypes.array.isRequired
};

export default Footer;

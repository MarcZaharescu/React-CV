import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcons from "react-social-media-icons";

const Media = ({ icons, size, color }) => {
  return (
    <ul className="social-media">
      <SocialMediaIcons icons={icons} iconSize={size} iconColor={color} />
    </ul>
  );
};

Media.propTypes = {
  icons: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Media;

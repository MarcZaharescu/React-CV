import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcons from "react-social-media-icons";
import data from "../../../data";

const Media = ({ icons, size, color }) => {
  return (
    <ul className="social__media-wrapper">
      <SocialMediaIcons  className="social__media-icons" icons={data.common.socialMediaIcons} iconSize={size} iconColor={color} />
    </ul>
  );
};

Media.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Media;

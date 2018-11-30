import React from "react";
import PropTypes from "prop-types";

const Banner = ({ message, type }) => {
  return (
    <div className={`banner type__${type}`}>
      <p>{message}</p>
    </div>
  );
};

Banner.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Banner;

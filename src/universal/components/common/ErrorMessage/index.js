import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <div className="validation__errors">
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.PropTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;

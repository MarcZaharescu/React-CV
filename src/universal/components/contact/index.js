import React from "react";
import PropTypes from "prop-types";

const Contact = ({contactDetails}) => {
  return (
    <section id="contact">
      <div className="section-row">
        <div className="contact__wrapper">
          <h2 className="contact__headline">
            {"to be added"}
          </h2>
          </div>
          </div>
          </section>
        );
      }

Contact.propTypes = {
  contactDetails: PropTypes.array.isRequired
};

export default Contact;

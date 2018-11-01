import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaDownload } from "@fortawesome/fontawesome-free-solid";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.downloadResume = this.downloadResume.bind(this);
  }

  downloadResume(){
   var element = document.createElement("a");
   element.href = require("../../../public/documents/Marc Theodor Zaharescu - CV.pdf")
   element.download = "Marc Theodor Zaharescu - CV.pdf";
   element.click();
 }

  render() {
    const {
      aboutme,
      name,
      city,
      country,
      street,
      postcode,
      phone,
      email
    } = this.props;
    return (
      <section id="about-me">
        <div className="section-row">
          <div className="left-column">
            <img
              className="aboutme__picture"
              src={require("../../../public/images/profile-picture.png")}
              alt="Marc Zaharescu"
            />
          </div>

          <div className="aboutme__right" className="right-column">
            <h2 className="aboutme__right-title">About Me</h2>
            <p className="aboutme__right-span">{aboutme}</p>

            <div className="aboutme__right__contact">
              <h2 className="aboutme__right-title">Contact Details</h2>
              <p className="aboutme__right-span">
                <span className="aboutme__right-span">{name}</span> <br />
                <span className="aboutme__right-span">{`${city}, ${country}`}</span>{" "}
                <br />
                <span className="aboutme__right-span">{street}</span> <br />
                <span className="aboutme__right-span">{postcode}</span> <br />
                <span className="aboutme__right-span">{phone}</span> <br />
                <span className="aboutme__right-span">{email}</span> <br />
              </p>
            </div>
            <div className="aboutme__right-download-wrapper">
              <div onClick={this.downloadResume} className="aboutme__right-download--button">
                <FontAwesomeIcon icon="download" size="2x" />
                <a  className="aboutme__right-download--text">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  aboutme: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default About;

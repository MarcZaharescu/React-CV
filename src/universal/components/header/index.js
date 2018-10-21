import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/fontawesome-free-solid";
import Footer from "../footer";

const socialMediaIcons = [
  {
    url: "https://www.instagram.com/marczaha/",
    className: "fa-instagram"
  },
  {
    url: "https://www.facebook.com/marc.zaharescu",
    className: "fa-facebook"
  },
  {
    url: "https://github.com//MarcZaharescu",
    className: "fa-github"
  },
  {
    url: "https://linkedin.com/in/marczaharescu/",
    className: "fa-linkedin"
  },
  {
    url: "https://www.twitter.com/marczaharescu",
    className: "fa-twitter"
  }
];

const Header = props => {
  return (
    <div className="headline">
      <h1>{"Hi, I'm Marc."}</h1>
      <h3>
        {"I'm a London based "}
        <span>Software Engineer. </span>
        {"I'm currenly focusing on Node, React and Redux web applications."}
      </h3>
      <Footer icons={socialMediaIcons} />
      <div className="headline-down-button">
        <FontAwesomeIcon icon="chevron-circle-down"  size='4x'/>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;

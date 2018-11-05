import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcons from "react-social-media-icons";
import Media from "../media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/fontawesome-free-solid";
const Footer = props => {

  const scrollToHeader = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="footer" className="no-overflow">
      <div className="footer__wrapper">
        <div className="footer__button">
          <FontAwesomeIcon className="footer__button-icon"
            icon="chevron-circle-up"
            size={`4x`}
            onClick={scrollToHeader}
          />
        </div>
        <div className="footer__media">
          <Media  size={`3em`} color={"#656565"} />
        </div>
        <div className="footer__details">
          <span>{"© Copyright 2018 Marc Zaharescu"}</span>
          <span>•</span>
          <span>{"Design by Styleshout"} </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

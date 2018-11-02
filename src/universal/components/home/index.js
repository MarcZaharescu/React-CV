import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/fontawesome-free-solid";
import Media from "../media";
import scrollToComponent from "react-scroll-to-component";

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

class Home extends React.Component {
  constructor(...args) {
    super(...args);
    this.scrollToAboutMe = this.scrollToAboutMe.bind(this);
  }

  scrollToAboutMe() {
    window.scrollTo(0, window.innerHeight);
  }

  render() {
    const { name, profession, location, summary } = this.props;

    return (
      <section id="home">
        <div className="home__wrapper">
          <h1 className="home__headline--title">{`Hi, I'm ${name}.`}</h1>
          <h3 className="home__headline--summary">
            {`I'm a ${location} based `}
            <span className="home__headline--profession">{`${profession}. `}</span>
            {summary}
          </h3>
          <hr className="home__headline--bar" />
          <Media icons={socialMediaIcons} size="3em" color="#fff" />
          <div type="button" className="home__button">
            <FontAwesomeIcon
              className="home__button--icon"
              icon="chevron-circle-down"
              size="3x"
              onClick={this.scrollToAboutMe}
            />
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Home;

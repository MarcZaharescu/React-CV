import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/fontawesome-free-solid";
import Media from "../media";

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

    this.state = {
      multiplier: 4
    };
    this.setMultiplier = this.setMultiplier.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.setMultiplier);
  }
  componentWillMount() {
    window.addEventListener("resize", this.setMultiplier);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setMultiplier);
  }

  setMultiplier() {
    this.setState({ multiplier: window.innerWidth / 400 });
  }

  render() {
    const { name, profession, location, summary } = this.props;
    const { multiplier } = this.state;
    const buttonSize = Math.round(multiplier);

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
          <Media icons={socialMediaIcons} size={`${multiplier}em`} />
          <div className="home__button">
            <FontAwesomeIcon
              icon="chevron-circle-down"
              size={`${buttonSize}x`}
              color="#fffff"
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

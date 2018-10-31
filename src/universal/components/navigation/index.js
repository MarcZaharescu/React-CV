import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Navigation extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      slide: 0,
      showBackground: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const cScrollY = window.scrollY;
    const maxScroll = 65;

    if (cScrollY > window.innerHeight) {
      this.setState({ showBackground: true });
    } else {
      this.setState({ showBackground: false });
    }

    if (cScrollY > maxScroll) {
      this.setState({ slide: "-50px" });
    } else {
      this.setState({ slide: "0px" });
    }
  }

  render() {
    const { links } = this.props;
    const { showBackground } = this.state;

    return (
      <nav
        className={"navigation " + (showBackground ? "nav-show" : "nav-hide")}
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: "transform 200ms linear, top 0.5s",
        }}
      >
        <ul className="navigation__wrapper">
          {links.map(field => {
            return (
              <li key={field.text} className="navigation__list-item">
                <NavLink className="navigation__link" to={field.to}>
                  {field.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navigation;

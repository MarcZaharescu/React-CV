import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ links }) => {
  return (
    <ul className="navigation">
      {links.map(field => {
        return (
          <li key={field.text} className="navigation__list-item">
            <Link className="navigation__link" to={field.to}>
              {field.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navigation;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title, author }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 className="logo-txt">
        <i className={icon} />
        {title}
        <span><i>{author}</i></span>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github-Finder",
  author: "Manish Vig",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

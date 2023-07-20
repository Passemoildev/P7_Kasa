import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/" className="nav-header__nav-link-home">
        Accueil
      </NavLink>
      <NavLink to="/aboutus" className="nav-header__nav-link-aboutus">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/square">
        Square
      </NavLink>
      <NavLink exact to="/doggoslist">
        Doggo List
      </NavLink>
      <NavLink exact to="/doggoindex">
        Doggo Index
      </NavLink>
      <NavLink exact to="/map">
        Map
      </NavLink>
    </nav>
  );
}

export default NavBar;

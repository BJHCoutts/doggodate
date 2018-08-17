import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const NavBar = props => {
  const { currentUser, onSignOut = () => {} } = props;

  const handleClick = event => {
    event.preventDefault();
    onSignOut();
  };

  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/square">
        Square
      </NavLink>
      <NavLink exact to="/doggoadd">
        Doggo Add
      </NavLink>
      <NavLink exact to="/doggoindex">
        Doggo Index
      </NavLink>
      <NavLink exact to="/map">
        Map
      </NavLink>
      {currentUser ? (
        <React.Fragment>
          <span>{currentUser.full_name}</span>
          <a onClick={handleClick} href="#not-used">
            Sign Out
          </a>
        </React.Fragment>
      ) : (
        <NavLink className="supports-classname" exact to="/sign_in">
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;

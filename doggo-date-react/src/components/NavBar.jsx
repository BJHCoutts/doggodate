import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const NavBar = props => {
  const { currentUser, onSignOut = () => {} } = props;

  const handleClick = event => {
    event.preventDefault();
    onSignOut();
  };

  const greeting_arr = ["Bork, Bork, ", "Arf, Arf, ", "Woof, Woof, "];

  const greeting = () => {
    return greeting_arr[Math.floor(Math.random() * greeting_arr.length)];
  };

  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/doggo/new">
        Add a Doggo
      </NavLink>
      <NavLink exact to="/doggo/index">
        Available Doggos
      </NavLink>
      <NavLink exact to="/map_page">
        Map
      </NavLink>
      {/* <NavLink exact to="/cube">
        Cube
      </NavLink> */}
      {currentUser ? (
        <React.Fragment>
          <span>
            {greeting()}
            {currentUser.full_name}
          </span>
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

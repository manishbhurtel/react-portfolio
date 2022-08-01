import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <b>{props.fname}</b>
          </NavLink>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeStyle={{ color: "#61dafb" }}
                onClick={togleLinks}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{ color: "#61dafb" }}
                onClick={togleLinks}
              >
                About
              </NavLink>
            </li>
            <li>
              <a
                href="mailto:bhurtelnamrata@gmail.com"
                className="center btn-home"
                target="_blank"
                rel="noreferrer"
              >
               Email
              </a>
            </li>
          </ul>
        </div>
        <div className="burger">
          <i className="fas fa-bars" onClick={togleLinks}></i>
        </div>
      </nav>
    </>
  );
}
function togleLinks() {
  const navListActive = document.querySelector(".links");
  const fontAwe = document.querySelector(".fa-bars");

  navListActive.classList.toggle("linksMobile");
  fontAwe.classList.toggle("fa-times-circle");
}
export default Navbar;

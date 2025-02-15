import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>EDUSPHERE</h1>
        <span>ONLINE LEARNING AND EDUCATIONAL SPACE</span>
      </div>
      <nav className="head-list">
        <ul>
          <li className="head-link">
            <Link to="/">Home</Link>
          </li>
          <li className="head-link">
            <Link to="/about">About</Link>
          </li>
          <li className="head-link">
            <Link to="/courses">Courses </Link>
          </li>
          <li className="head-link">
            <Link to="/pricing">Pricing </Link>
          </li>
          <li className="head-link">
            <Link to="/team">Team </Link>
          </li>
        </ul>
        <div className="start">
          <div className="button">JOIN US </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

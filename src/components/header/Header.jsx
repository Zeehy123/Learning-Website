import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <h1>EDUSPHERE</h1>
        <span>ONLINE LEARNING AND EDUCATIONAL SPACE</span>
      </div>
      <nav className="head-list">
        <ul
          className={click ? "harmbuger" : "head-list"}
          onClick={() => setClick(false)}
        >
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
          <h4 className="button">JOIN US </h4>
        </div>
        <button className="toggle" onClick={() => setClick(!click)}>
          {click ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="fcontainer">
          <div className="bottom logo">
            <h1>EDUSPHERE</h1>
            <span>ONLINE LEARNING AND EDUCATIONAL SPACE</span>
            <p>
              "Beyond distant lands, where words take form, far from the realms
              of Vokalia and Consonantia, reside the unseen stories."
            </p>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="bottom link">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Course List</li>
            </ul>
          </div>
          <div className="bottom link">
            <h3>Explore</h3>
            <ul>
              <li>Feedbacks</li>
              <li>Terms & Conditions</li>
              <li>Pricing</li>
              <li>Contact Us</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="newletter">
            <div className="news">
              <div className="left">
                <h1>Newsletter - Stay tune and get the latest update</h1>
                <span>Beyond distant lands, where words take form,</span>
              </div>
              <div className="right row">
                <input type="text" placeholder="Enter email address" />
                <i className="fa fa-paper-plane"></i>
              </div>
            </div>
          </div>
          <div className="bottom last">
            <h3>Got Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                114 terris St. Mountain View, San Francisco, Texas, USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +4 882 1129 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                hello@domain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2025 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="Hcontainer">
          <div className="hero-head">
            <h3>Welcome to EduSphere</h3>
            <h1>Your Trusted Partner in Online Education Excellence</h1>
            <p>
              "Beyond distant lands, where words take form, far from the realms
              of Vokalia and Consonantia, reside the unseen stories."
            </p>
            <div className="hbutton">
              <button className="pbutton">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="margin"></div>
    </>
  );
};

export default Hero;

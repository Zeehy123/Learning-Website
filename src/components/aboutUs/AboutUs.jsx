import React from "react";
import "./aboutUs.css";
import MInfo from "../Home/MoreInfo/MInfo";
import Inhouse from "../Home/Inhouse/Inhouse";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="Acontainer">
          <div className="aboutheading">
            <h3>
              Welcome to EDUSPHERE, <br />
              your gateway to quality online education.
            </h3>
            <p>
              Our mission is to create a dynamic learning environment where
              students, professionals, and lifelong learners can acquire
              valuable skills to thrive in today’s world
            </p>
          </div>
        </div>
      </section>

      <div className="margin"></div>
      <section className="chooseUs">
        <div className="chooseContainer">
          <div className="heading">
            <h3>Why Choose Us?</h3>
          </div>
          <div className="flex">
            <div className="left">
              <img src="./images/about us2.jpg" alt="" />
            </div>
            <div className="right">
              <p>
                We offer a diverse range of online courses designed by industry
                experts, ensuring high-quality, practical knowledge. From
                self-paced learning to instructor-led sessions, we provide
                flexibility for learners of all backgrounds. We offer:
              </p>
              <ul>
                <li>Expert-led courses</li>
                <li>Flexible learning schedules</li>
                <li>Certification upon course completion</li>
                <li>Community support and mentorship</li>
              </ul>
              <p>
                Start your learning journey with us today! Explore our courses
                and take the next step toward your personal and professional
                growth
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="marginbottom"></div>
      <MInfo />
      <Inhouse />
      <div className="marginbottom"></div>
    </>
  );
};

export default AboutUs;

import React from "react";
import "./OtherCourses.css";
import { Others } from "../../../data.js";
const OtherCourses = () => {
  return (
    <>
      <section className="others">
        <div className="Othercontainer">
          <div className="heading">
            <h3>COURSES</h3>
            <h1>Check out Our Other Courses</h1>
          </div>
          <div className="content grid3">
            {Others.map((it) => (
              <div className="bottom">
                <div className="img">
                  <img src={it.image} alt="" />
                </div>
                <h1>{it.coursesName}</h1>
                <span>{it.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherCourses;

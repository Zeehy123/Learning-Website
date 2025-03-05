import React from "react";
import "./AllCourses.css";
import "./courses.css";
import OtherCourses from "./OtherCourses/OtherCourses";
import { AllCourse } from "../../data.js";
const AllCourses = () => {
  return (
    <>
      <section className="AllCourse">
        <div className="CourseContainer">
          <div className="heading">
            <h3>
              Upgrade your skills with our expert-led courses. Learn at your own
              pace and gain valuable knowledge in various fields!
            </h3>
          </div>
        </div>
      </section>
      <div className="margin"></div>
      <OtherCourses />
      <div className="marginbottom"></div>
      <section className="CoursesHome">
        <div className="containerCourse">
          <div className="heading">
            <h3>courses offered</h3>
            <h1>explore Our Top-Rated Online Courses</h1>
          </div>
          <div className="courses">
            <div className="box">
              {AllCourse.map((it) => (
                <div className="Citems">
                  <div className="content flex">
                    <div className="top-left">
                      <div className="img">
                        <img src={it.image} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{it.coursesName}</h1>
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                      </div>
                      <div className="details">
                        {it.Teacher.map((detail) => (
                          <div className="bottom">
                            <div className="details-img">
                              <img src={detail.image} alt="" />
                            </div>
                            <div className="name">
                              <h4>{detail.name}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pricing">
                    <h3>
                      {it.Allprice} / {it.Pricefor}
                    </h3>
                  </div>
                  <button className="box-btn">APPLY NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCourses;

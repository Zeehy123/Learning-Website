import React from "react";
import "./Testimonial.css";
import { testimonials } from "../../data";
const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <div className="Testcontainer">
          <div className="heading">
            <h3>TESTIMONIAL</h3>
            <h1>Here is what our Sucessful Students say</h1>
          </div>
          <div className="content grid2">
            {testimonials.map((it) => (
              <div className="items">
                <div className="bottom flex">
                  <div className="img">
                    <img src={it.image} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{it.name}</h2>
                    <span>{it.work}</span>
                  </div>
                </div>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

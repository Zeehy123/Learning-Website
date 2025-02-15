import React from "react";
import "./Pricing.css";
import Pricing from "../Home/Prices/Prices";
import Testimonial from "../Testimonial/Testimonial";
const Prcing = () => {
  return (
    <>
      <section className="prcing">
        <div className="PContainer"></div>
      </section>
      <div className="margin"></div>
      <Pricing />
      <Testimonial />
    </>
  );
};

export default Prcing;

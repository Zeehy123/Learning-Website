import React from "react";
import Hero from "./hero/Hero";
import MInfo from "./MoreInfo/MInfo";

import HomeCourses from "../Courses/HomeCourses";
import Testimonial from "../Testimonial/Testimonial";
import Inhouse from "./Inhouse/Inhouse";
import Pricing from "./Prices/Prices";

const Home = () => {
  return (
    <>
      <Hero />
      <MInfo />
      <HomeCourses />
      <Testimonial />
      <Inhouse />
      <Pricing />
    </>
  );
};

export default Home;

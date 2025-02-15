import React from "react";
import "./prices.css";
import { prices } from "../../../data";

const Pricing = () => {
  return (
    <>
      <section className="pricehome">
        <div className="heading">
          <h1>OUR PRICING</h1>
          <h3>Prices</h3>
        </div>
        <div className=" prices Pcontainer grid">
          {prices.map((it) => (
            <div className="items">
              <h4>{it.name}</h4>
              <h1>
                <span>$</span>
                {it.price}
              </h1>
              <p>{it.desc}</p>
              <button className="box-btn">GET STARTED</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;

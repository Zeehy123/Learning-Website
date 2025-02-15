import React from "react";
import "./Inhouse.css";
import { inHouse } from "../../../data";

const Inhouse = () => {
  return (
    <>
      <section className="INHouse">
        <div className="HouseContainer grid">
          {inHouse.map((it) => (
            <div className="bottom flex">
              <div className="img">
                <img src={it.image} alt="" />
              </div>
              <div className="text">
                <h1>{it.info}</h1>
                <h3>{it.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Inhouse;

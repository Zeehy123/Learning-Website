import React from "react";
import "./team.css";
import { team } from "../../data";

import Inhouse from "../Home/Inhouse/Inhouse";
const Team = () => {
  return (
    <>
      <section className="team">
        <div className="Tcontainer">
          <div className="heading">
            <h3>Meet our team</h3>
          </div>
        </div>
      </section>
      <div className="margin"></div>
      <section className="members">
        <div className="Mcontainer grid">
          {team.map((it) => (
            <div className="items">
              <div className="img">
                <img src={it.image} alt="" />
              </div>
              <div className="details">
                <h2>{it.name}</h2>
                <p>{it.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Inhouse />
    </>
  );
};

export default Team;

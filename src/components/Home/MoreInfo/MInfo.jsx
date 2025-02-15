import React from "react";
import "./Minfo.css";
import { MoreInfo } from "../../../data.js";
const MInfo = () => {
  return (
    <div className="HomeInfo">
      <div className="container">
        <div className=" left row">
          <h3>LEARN ANYTHING</h3>
          <h1>Benefits of Online Learning Excellence</h1>
          <div className="items">
            {MoreInfo.map((it) => {
              return (
                <div className="item">
                  <div className="img">
                    <img src={it.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{it.title}</h2>
                    <p>{it.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right row">
          <img src="./images/homeInfo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MInfo;

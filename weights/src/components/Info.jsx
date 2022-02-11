import React from "react";
import Nutrition from "./Nutrition";

function Info() {
  return (
    <div className="info">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-7">
            <img
              className="squat"
              src="\imgs\squat.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About this Website</h1>
              <Nutrition />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
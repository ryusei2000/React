import React from "react";
import Nutrition from "./Nutrition";
import Button from "./Button";

function Diet() {
  return (
    <div className="about">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-7">
            <img
              className="chicken"
              src="\imgs\chicken.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Diet Information</h1>
            <Button />
              <Nutrition />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diet;
import React from "react";
import Nutrition from "./Nutrition";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x300"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Diet Information</h1>
              <Nutrition />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
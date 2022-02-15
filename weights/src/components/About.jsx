import React from "react";

function About() {
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
            <p>
              This website provides information about working out and nutrition.
              We're focused on providing all levels of lifters with accurate
              and helpful information! Our lifting tips are catered for each
              lifter's long term goal, however, you can use any exercise routine
              you personally enjoy, regardless of your goal.
            </p>
            <p>
              We also want to help lifters determine their estimated calorie
              consumption that best aligns with their lifting goals! In addition
              to calorie estimates, we provide protein estimates to help lifters
              best build muscle as you need to also reach a certain protein
              threshold in order to build muscle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
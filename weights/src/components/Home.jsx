import React from "react";
import Button from "./Button";

// currently have an issue with button not aligning to the right, maybe ask andy
function Home() {
  return (
    <div className="home">
      <img
        className="workout"
        src="\imgs\workout.jpg"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="font-weight-light">Workouts</h1>
            <Button page="home"/>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
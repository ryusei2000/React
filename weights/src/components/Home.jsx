import React from "react";
import Button from "./Button";


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              className="workout"
              src="\imgs\workout.jpg"
              alt=""
            />
            <h1 className="font-weight-light">Workouts</h1>
            <Button/>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
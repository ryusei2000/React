import React from "react";
import Button from "./Button";


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              className="img-fluid rounded float-left mb-5 mr-5 ml-0 wrap"
              src="http://placehold.it/300x600"
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
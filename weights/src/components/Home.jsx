import React from "react";
import Button from "./Button";


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row my-2">
          <div class="col-lg-4">
            <img
              class="img-fluid rounded float-start mb-5 ml-0"
              src="http://placehold.it/300x600"
              alt=""
            />
          </div>
          <div class="col-lg-8">
            <h1 class="font-weight-light">Workouts</h1>
            <p>
            <Button/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
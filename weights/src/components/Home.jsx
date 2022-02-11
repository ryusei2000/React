import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

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
            <p>
              If you'd like to learn more about the nutrition side of lifting,
              check out our nutrition page!
            </p>
            <Link to="/about">Click here!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home;
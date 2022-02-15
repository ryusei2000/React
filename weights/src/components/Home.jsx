import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

// currently have an issue with nested lists but that issue is
// related to the col classname here so focus on content first, then
// we can resolve this col issue when we go to styling the page as a whole
// could look into creating a css class specifically for the inner elements
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
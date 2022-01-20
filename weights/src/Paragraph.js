import React, { Component } from 'react';
import Slider from './Slider'

function Beginner() {
  return(
    <div>
      <h2>Introduction</h2>
      <p>
        Glad to see you're starting weight training! Weight training
        builds stronger muscles, strengthens your bones/joints, and
        can ensure your metabolism stays at a healthy state. Weight
        lifting can be beneficial for all age groups so it's never too
        late to start!
      </p>
      <p>
        The most important aspect when starting to lift weights is to
        maintain good and proper form! Form's the most important element
        when it comes to strength training as without proper form, you can
        easily injure yourself, which is the opposite of what we want!
      </p>
      <h2>Beginner Tips</h2>
      <ul>
        <li>
          <strong>Warm up!</strong> An effective warmup should increase
          blood flow in your body and allow you to get a better workout in.
        </li>
        <li>
          <strong>Start light!</strong> With our emphasis on form, we recommend
          starting with lighter weights until you feel confident that you're
          executing proper form. Aim for a weight that you can comfortably lift
          for about 3 sets of 10 repetitions.
        </li>
        <li>
          <strong>Rest is important!</strong> Make sure to rest for at least
          a minute between sets in order to not fatigue your muscles too
          quickly. Also, make sure to take rest days where you're not
          exercising too intensely as your muscles need time to recover.
        </li>
        <li>
          <strong>Stretch!</strong> Stretching after or before a workout
          helps keep you flexible, ease muscle tightness, and reduce your
          overall risk of injury.
        </li>
      </ul>
    </div>
  )
}

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = Slider.state;
  }

  render() {
    return(
      <div className="Paragraph">

      </div>
    )
  }
}

export default Paragraph;
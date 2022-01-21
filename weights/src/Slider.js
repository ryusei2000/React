import React from 'react';

// parent
export default class Slider extends React.Component {
  state = {
    value: 0
  }

  handleOnChange = (e) => this.setState({value: e.target.value});

  render() {
    return (
      <>
        <input type="range" min={0} max={99} value={this.state.value} className="slider"
        onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
        <Paragraph experience={this.state.value}/>
      </>
    )
  }
}

// child
class Paragraph extends React.Component {
  render() {
    if (this.props.experience < 25) {
      return(
        <div className="Paragraph">
          <Beginner />
        </div>
      )
    } else if (this.props.experience < 50) {
      return(
        <div className="Paragraph">
          <Novice />
        </div>
      )
    } else if (this.props.experience < 75) {
      return(
        <div className="Paragraph">
          <Intermediate />
        </div>
      )
    } else {
      return(
        <div className="Paragraph">
          <Advanced />
        </div>
      )
    }
  }
}

// function
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

function Novice() {
  return(
    <div>
      <h2>Introduction</h2>
      <p>
        You've been lifting for a while and have got a good feel for your routine!
        But you're getting restless and haven't been seeing any signs of improvement,
        and that's totally fine! We'll help you figure out what may be wrong.
      </p>
      <h2>Novice Tips</h2>
        <ul>
          <li>
            <strong>Don't change routines too often!</strong> Sometimes newer lifters
            may change their routine up very frequently as they aren't seeing as much
            progress as they initially were and expect that degree of improvement to
            continue. However, working out often plateaus and it may not be your routine
            that is to blame, it may just be a natural plateau. Stick with your current
            program and finish it out to see the results! If you end it too early, you
            haven't actually finished it and can't say that it didn't produce results.
          </li>
          <li>
            <strong>Don't frequently max out!</strong> This method may be effective
            for a period of time, however, when it stops working out, it can leave
            you feeling confused or frustrated why your progress has plateaued.
            This method of training is not nearly as effective as a structured
            routine, as generally when you max, you lose your form and get bad reps
            (repetitions). You should always aim for a good amount of volume at a
            fairly rigorous intensity over the course of a long period of time, as
            that is what will help further your progress. The gym's a slow process
            requiring a lot of patience and diligence!
          </li>
          <li>
            <strong>Try progressive overload!</strong> Progressive overload is the
            process of constantly slowly increasing either the repetitions used in a set or the
            weight that's used during an exercise. This allows your body to make
            incremental gains over time. For example, a lifter can start doing 8 reps
            for 3 sets and then increase the rep range to 10 the next week (if that weight
            doesn't feel excessively difficult at that rep range) and continue to 12 the
            next week. After reaching 12 reps, the lifter may want to opt to increase the
            weight after that point, and drop back down to 6-8 reps and repeat the process!
        </li>
        </ul>
    </div>
  )
}

function Intermediate() {
  return(
    <div>
      <h2>Intermediate Tips</h2>
      <ul>
        <li>
          <strong>Not eating enough!</strong> Often times your training can be
          intense, but you can be limited by your lack of food! You need to properly
          supply your body with nutrients to be able to effectively allow it to
          build muscle. You might think you're eating enough but you may have to
          start tracking your food in order to find out exactly how much food you
          are currently eating and how much more food you may need to eat.
        </li>
        <li>
          <strong>Make sure you're sleeping enough!</strong> Sleeping a solid 8
          hours a night in order to let your muscles fully recover is incredibly
          underrated. Many lifters neglect sleeping as a part of the recovery process
          and they are often using caffeine as a substitute to feel alert at the gym.
        </li>
        <li>
          <strong>Try different variations!</strong> You might love EZ-bar curls but
          you can also try doing curls with dumbbells instead! Dumbbells can offer
          greater shoulder mobility and you can adapt the way you curl the dumbbells,
          varying the form from hammer curls to standard bicep curls to spider curls!
          The variations can allow you to slightly change the way your muscles are
          being used and lead to greater muscle growth!
        </li>
      </ul>
    </div>
  )
}

function Advanced() {
  return(
    <div>
      <h2>Advanced Tips</h2>
      <ul>
        <li>
          <strong>Emphasize an appropriate rep range!</strong> If you're training
          for hypertrophy, you should focus on a rep range of 8-12 but if you're
          training for strength, you should focus on a rep range of 4-8. Your rep
          ranges are heavily dependent on what the focus of your training is. For
          newer lifters, I suggest a higher rep range so they can focus more on
          consistently using proper form with a weight that should not be too challenging,
          however, for more advanced lifters, they should understand their bodies
          significantly more and know their limits.
        </li>
        <li>
          <strong>Use unconventional methods!</strong> Your body will eventually
          plateau and there's nothing wrong with that! But to help escape stagnation,
          lifters can utilize a variety of methods such as
            <ul>
              <li>Negative Repetitions</li>
              <li>Supersets</li>
              <li>Pre-exhaustion Training</li>
              <li>Half Repetitions</li>
              <li>Pause Repetitions</li>
            </ul>
        </li>
      </ul>
    </div>
  )
}
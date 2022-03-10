import React from 'react';
import { Cookies, CookiesProvider } from 'react-cookie';
import { Link } from "react-router-dom";
// import { MContext } from './Provider';

// parent
export default class Button extends React.Component {


  constructor (props) {
    super(props)

    this.state = {
      activeItem: 'Maintain',
      confirm: "false"
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeConfirm = this.handleClick.bind(this);
  }

  componentDidMount() {
    const storedValue2 = sessionStorage.getItem("my_value");
    if (storedValue2) {
      this.setState({ activeItem: storedValue2 });
    } else {
      this.setState({ activeItem: 'Maintain' });
    }
  }

  handleClick(id) {
    const storedValue2 = sessionStorage.getItem("my_value");
    if (storedValue2) {
      this.setState({activeItem: id});
      sessionStorage.setItem("my_value", id);
    } else {
      this.setState({activeItem: id});
      localStorage.setItem("my_value", id);
     }
  }

  // handleClickNo(id) {
  //   this.setstate({activeItem: id});
  //   localStorage.setItem("my_value", null);
  // }

  changeConfirm() {
    this.setState({confirm: "true"});
  }

  getClassName(id) {
    if (id === this.state.activeItem) {
      return "on"
    } else {
      return "off"
    }
  }


  render() {
    if (this.props.page === "home") {
      return (
        <div >
          <div id="temp1">
            <div>
              <button className={this.getClassName('Maintain')} id="Maintain" onClick={()=>{
                this.handleClick("Maintain");
              }}> Maintain </button>
              <button className={this.getClassName('Bulk')} id="Bulk" onClick={()=>{
                this.handleClick("Bulk");
              }}> Bulk </button>
              <button className={this.getClassName('Cut')} id="Cut" onClick={()=>{
                this.handleClick("Cut");
              }}> Cut </button>
            </div>
            <div>
              <Link to='/about'>
              <button className="right">Nutrition</button>
              </Link>
            </div>
          </div>
            <Paragraph focus={this.state.activeItem} />
        </div>
      )
    } else {
      return(
        <div>
          <button className={this.getClassName('Maintain')} id="Maintain" onClick={()=>{
            this.handleClick("Maintain");
          }}> Maintain </button>
          <button className={this.getClassName('Bulk')} id="Bulk" onClick={()=>{
            this.handleClick("Bulk");
          }}> Bulk </button>
          <button className={this.getClassName('Cut')} id="Cut" onClick={()=>{
            this.handleClick("Cut");
          }}> Cut </button>
        </div>
      )
    }
  }
}

// child
class Paragraph extends React.Component {
  render() {
    if (this.props.focus === 'Maintain') {
      return(
        <div>
          <MaintainWeight />
        </div>
      )
    } else if (this.props.focus === "Bulk") {
      return(
        <div>
          <Bulk />
        </div>
      )
    } else if (this.props.focus === "Cut") {
      return(
        <div>
          <Cut />
        </div>
      )
    }
  }
}

// function
function MaintainWeight() {
  return(
    <div>
      <hr/>
      <p>
        Having a workout routine to lose weight can be incredibly obvious,
        however, what is not so obvious is that you need to workout to maintain
        your weight after hitting your bodyweight goals! We'll provide you with
        an example workout routine that you could follow in order to maintain
        your current body weight. Our routine assumes you're working out over
        the course of a normal week and will be structured like so.
      </p>
      <p className='days'>Monday, Wednesday, Friday</p>
      <table>
        <tr>
          <th>Sets</th>
          <th>Reps</th>
          <th>Exercise</th>
          <th>Demo</th>
        </tr>
        <tr>
          <td>4</td>
          <td>10</td>
          <td>Barbell Bench Press</td>
          <td><img src='/imgs/barbelbench.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>12</td>
          <td>Lat Pulldowns</td>
          <td><img src='/imgs/latpulldown.jpg' alt='lat pulldown' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Tricep Pushdowns</td>
          <td><img src='/imgs/triceppushdown.jpg' alt='tricep pushdown' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Dumbbell Curls</td>
          <td><img src='/imgs/curl.jpg' alt='dumbbell curl' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Rear Delt Flys</td>
          <td><img src='/imgs/reardelt.jpg' alt='rear delt flys' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>20</td>
          <td>Leg Curls</td>
          <td><img src='/imgs/legcurl.jpg' alt='leg curl' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>20</td>
          <td>Leg Extensions</td>
          <td><img src='/imgs/legextension.jpg' alt='leg extension' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Leg Press</td>
          <td><img src='/imgs/legpress.jpg' alt='leg press' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Hanging Leg Raises</td>
          <td><img src='/imgs/hangingleg.jpg' alt='hanging leg raises' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Hanging Knee Twists</td>
          <td><img src='/imgs/hangingknee.jpg' alt='hanging knee twists' className='graphics'></img></td>
        </tr>
      </table>
      <p className='days'>Tuesday, Thursday</p>
      <p>60 minutes of moderate cardio: walking, jogging, etc.</p>
      <p className='days'>Saturday, Sunday</p>
      <p>Aim to rest for these two days! Rest days are important too!</p>
    </div>
  )
}

function Bulk() {
  return(
    <div>
      <hr/>
      <p>
        For bulking, you want to make sure you're rigorously training and
        aiming to push your muscles near failure each session. If enough
        intensity is provided in each session, this workout routine should
        be good for bulking (along with the appropriate diet of course)!
        We also won't specify cardio, but a good warmup is essential to making
        sure your body's ready to workout so we recommend warming up every
        session with some form of cardio. This exercise routine is called
        Push, Pull, Legs as you'll focus on one of those types of movements
        each day.
      </p>
      <p className='days'>Monday, Thursday</p>
      <table>
        <tr>
          <th>Sets</th>
          <th>Reps</th>
          <th>Exercise</th>
          <th>Demo</th>
        </tr>
        <tr>
          <td>3</td>
          <td>6-8</td>
          <td>Barbell Bench Press</td>
          <td><img src='/imgs/barbelbench.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>6-8</td>
          <td>Barbell Bench Press</td>
          <td><img src='/imgs/inclinebench.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Cable Crossovers</td>
          <td><img src='/imgs/cablecross.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Tricep Pushdowns</td>
          <td><img src='/imgs/triceppushdown.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Tricep Kickbacks</td>
          <td><img src='/imgs/tricepkickback.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Skull Crushers</td>
          <td><img src='/imgs/skullcrushers.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>12</td>
          <td>Dumbbell Lateral Raises</td>
          <td><img src='/imgs/dumbbelllatraise.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Rear Delt Flys</td>
          <td><img src='/imgs/reardelt.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
      </table>
      <p className='days'>Tuesday, Thursday</p>
      <table>
        <tr>
          <th>Sets</th>
          <th>Reps</th>
          <th>Exercise</th>
          <th>Demo</th>
        </tr>
        <tr>
          <td>3</td>
          <td>6-8</td>
          <td>Bentover Barbell Row</td>
          <td><img src='/imgs/barbelrow.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Chest Supported Dumbbell Row</td>
          <td><img src='/imgs/chestsupprow.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Lat Pulldowns</td>
          <td><img src='/imgs/latpulldown.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Seated Cable Row</td>
          <td><img src='/imgs/seatedcable.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Straight Arm Pulldowns</td>
          <td><img src='/imgs/straightarmpull.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Dumbbell Curls</td>
          <td><img src='/imgs/curl.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Dumbbell Spider Curls</td>
          <td><img src='/imgs/spidercurl.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Concentration Curls</td>
          <td><img src='/imgs/concurl.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
      </table>
      <p className='days'>Wednesday, Saturday</p>
      <table>
        <tr>
          <th>Sets</th>
          <th>Reps</th>
          <th>Exercise</th>
          <th>Demo</th>
        </tr>
        <tr>
          <td>4</td>
          <td>6-8</td>
          <td>Barbell Squats</td>
          <td><img src='/imgs/barbellsquat.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Seated Leg Press</td>
          <td><img src='/imgs/legpress.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Leg Curls</td>
          <td><img src='/imgs/legcurl.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Leg Extensions</td>
          <td><img src='/imgs/legextension.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Romanian Deadlift</td>
          <td><img src='/imgs/romdeadlift.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>20</td>
          <td>Calf Raises</td>
          <td><img src='/imgs/calfraises.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
      </table>
      <p className='days'>Sunday</p>
      <p>
        Rest up! Take some time each week in order to rest your muscles
        in order to allow them to recover for the next week. Recovery is
        what allows your muscles to grow!
      </p>
    </div>
  )
}

function Cut() {
  return(
    <div>
      <hr/>
      <p>
        For cutting, you want to emphasize being in a caloric deficit and
        burning calories through exercise helps maintain that deficit! In
        addition, having more muscle can help raise your natural metabolism
        as your body will need more energy to be able to fuel those muscles
        in your daily life. So our goal will be to combine cardio and
        strengthening your muscles in order to lose mostly fat and try to
        maintain as much muscle mass as possible. There are two different ways
        we can perform cardio (HIIT vs. Low Intensity Cardio) and each has their
        own set of pros and cons.
      </p>
      <ul>
        <li>HIIT</li>
          <ul>
            <li>Pros:</li>
            <ul>
              <li>Burns more calories in a shorter period</li>
              <li>Can be targeted to specific sports</li>
            </ul>
            <li>Cons:</li>
            <ul>
              <li>Harder to sustain for people out of shape</li>
              <li>Doesn't train endurance as much</li>
            </ul>
          </ul>
        <li>Low Intensity Cardio</li>
          <ul>
            <li>Pros:</li>
            <ul>
              <li>Easier to sustain for most people</li>
              <li>Helps train overall cardiovascular endurance</li>
            </ul>
            <li>Cons:</li>
            <ul>
              <li>Can be less interesting due to long intervals</li>
              <li>Won't be working on training fast twitch muscles</li>
            </ul>
          </ul>
      </ul>
      <p>An example schedule of someone who's aiming to cut could be:</p>
      <p className='days'>Monday, Wednesday, Friday</p>
      <table>
        <tr>
          <th>Sets</th>
          <th>Reps</th>
          <th>Exercise</th>
          <th>Demo</th>
        </tr>
        <tr>
          <td>4</td>
          <td>10</td>
          <td>Barbell Bench Press</td>
          <td><img src='/imgs/barbelbench.jpg' alt='barbel bench' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>12</td>
          <td>Lat Pulldowns</td>
          <td><img src='/imgs/latpulldown.jpg' alt='lat pulldown' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Tricep Pushdowns</td>
          <td><img src='/imgs/triceppushdown.jpg' alt='tricep pushdown' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Dumbbell Curls</td>
          <td><img src='/imgs/curl.jpg' alt='dumbbell curl' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Rear Delt Flys</td>
          <td><img src='/imgs/reardelt.jpg' alt='rear delt flys' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>20</td>
          <td>Leg Curls</td>
          <td><img src='/imgs/legcurl.jpg' alt='leg curl' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>20</td>
          <td>Leg Extensions</td>
          <td><img src='/imgs/legextension.jpg' alt='leg extension' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>10</td>
          <td>Leg Press</td>
          <td><img src='/imgs/legpress.jpg' alt='leg press' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Hanging Leg Raises</td>
          <td><img src='/imgs/hangingleg.jpg' alt='hanging leg raises' className='graphics'></img></td>
        </tr>
        <tr>
          <td>3</td>
          <td>15</td>
          <td>Hanging Knee Twists</td>
          <td><img src='/imgs/hangingknee.jpg' alt='hanging knee twists' className='graphics'></img></td>
        </tr>
      </table>
      <p className='days'>Tuesday, Thursday, Saturday</p>
      <ul>
        <li>Either HIIT or Low Intensity Cardio</li>
        <li>
          HIIT could be circuit running where you run for a minute at around
          70% of your max speed then run for 30 seconds at around 90%. You
          would repeat this pattern for about 10 times. That's an example of
          a HIIT circuit routine.
        </li>
        <li>
          An example of Low Intensity Cardio training could be jogging or biking
          for 60 minutes at a comfortable pace, which allows your body to burn
          calories over a long period of continuous motion.
        </li>
      </ul>
      <p className='days'>Sunday</p>
      <p>Rest up! Rest is important for muscle growth and recovery.</p>
    </div>
  )
}
// function Beginner() {
//   return(
//     <div>
//       <h2>Introduction</h2>
//       <p>
//         Glad to see you're starting weight training! Weight training
//         builds stronger muscles, strengthens your bones/joints, and
//         can ensure your metabolism stays at a healthy state. Weight
//         lifting can be beneficial for all age groups so it's never too
//         late to start!
//       </p>
//       <p>
//         The most important aspect when starting to lift weights is to
//         maintain good and proper form! Form's the most important element
//         when it comes to strength training as without proper form, you can
//         easily injure yourself, which is the opposite of what we want!
//       </p>
//       <h2>Beginner Tips</h2>
//       <ul>
//         <li>
//           <strong>Warm up!</strong> An effective warmup should increase
//           blood flow in your body and allow you to get a better workout in.
//         </li>
//         <li>
//           <strong>Start light!</strong> With our emphasis on form, we recommend
//           starting with lighter weights until you feel confident that you're
//           executing proper form. Aim for a weight that you can comfortably lift
//           for about 3 sets of 10 repetitions.
//         </li>
//         <li>
//           <strong>Rest is important!</strong> Make sure to rest for at least
//           a minute between sets in order to not fatigue your muscles too
//           quickly. Also, make sure to take rest days where you're not
//           exercising too intensely as your muscles need time to recover.
//         </li>
//         <li>
//           <strong>Stretch!</strong> Stretching after or before a workout
//           helps keep you flexible, ease muscle tightness, and reduce your
//           overall risk of injury.
//         </li>
//       </ul>
//     </div>
//   )
// }

// function Novice() {
//   return(
//     <div>
//       <h2>Introduction</h2>
//       <p>
//         You've been lifting for a while and have got a good feel for your routine!
//         But you're getting restless and haven't been seeing any signs of improvement,
//         and that's totally fine! We'll help you figure out what may be wrong.
//       </p>
//       <h2>Novice Tips</h2>
//         <ul>
//           <li>
//             <strong>Don't change routines too often!</strong> Sometimes newer lifters
//             may change their routine up very frequently as they aren't seeing as much
//             progress as they initially were and expect that degree of improvement to
//             continue. However, working out often plateaus and it may not be your routine
//             that is to blame, it may just be a natural plateau. Stick with your current
//             program and finish it out to see the results! If you end it too early, you
//             haven't actually finished it and can't say that it didn't produce results.
//           </li>
//           <li>
//             <strong>Don't frequently max out!</strong> This method may be effective
//             for a period of time, however, when it stops working out, it can leave
//             you feeling confused or frustrated why your progress has plateaued.
//             This method of training is not nearly as effective as a structured
//             routine, as generally when you max, you lose your form and get bad reps
//             (repetitions). You should always aim for a good amount of volume at a
//             fairly rigorous intensity over the course of a long period of time, as
//             that is what will help further your progress. The gym's a slow process
//             requiring a lot of patience and diligence!
//           </li>
//           <li>
//             <strong>Try progressive overload!</strong> Progressive overload is the
//             process of constantly slowly increasing either the repetitions used in a set or the
//             weight that's used during an exercise. This allows your body to make
//             incremental gains over time. For example, a lifter can start doing 8 reps
//             for 3 sets and then increase the rep range to 10 the next week (if that weight
//             doesn't feel excessively difficult at that rep range) and continue to 12 the
//             next week. After reaching 12 reps, the lifter may want to opt to increase the
//             weight after that point, and drop back down to 6-8 reps and repeat the process!
//         </li>
//       </ul>
//     </div>
//   )
// }

// function Intermediate() {
//   return(
//     <div>
//       <h2>Intermediate Tips</h2>
//       <ul>
//         <li>
//           <strong>Not eating enough!</strong> Often times your training can be
//           intense, but you can be limited by your lack of food! You need to properly
//           supply your body with nutrients to be able to effectively allow it to
//           build muscle. You might think you're eating enough but you may have to
//           start tracking your food in order to find out exactly how much food you
//           are currently eating and how much more food you may need to eat.
//         </li>
//         <li>
//           <strong>Make sure you're sleeping enough!</strong> Sleeping a solid 8
//           hours a night in order to let your muscles fully recover is incredibly
//           underrated. Many lifters neglect sleeping as a part of the recovery process
//           and they are often using caffeine as a substitute to feel alert at the gym.
//         </li>
//         <li>
//           <strong>Try different variations!</strong> You might love EZ-bar curls but
//           you can also try doing curls with dumbbells instead! Dumbbells can offer
//           greater shoulder mobility and you can adapt the way you curl the dumbbells,
//           varying the form from hammer curls to standard bicep curls to spider curls!
//           The variations can allow you to slightly change the way your muscles are
//           being used and lead to greater muscle growth!
//         </li>
//       </ul>
//     </div>
//   )
// }

// function Advanced() {
//   return(
//     <div>
//       <h2>Advanced Tips</h2>
//       <ul>
//         <li>
//           <strong>Emphasize an appropriate rep range!</strong> If you're training
//           for hypertrophy, you should focus on a rep range of 8-12 but if you're
//           training for strength, you should focus on a rep range of 4-8. Your rep
//           ranges are heavily dependent on what the focus of your training is. For
//           newer lifters, I suggest a higher rep range so they can focus more on
//           consistently using proper form with a weight that should not be too challenging,
//           however, for more advanced lifters, they should understand their bodies
//           significantly more and know their limits.
//         </li>
//         <li>
//           <strong>Use unconventional methods!</strong> Your body will eventually
//           plateau and there's nothing wrong with that! But to help escape stagnation,
//           lifters can utilize a variety of methods such as
//             <ul>
//               <li>Negative Repetitions</li>
//               <li>Supersets</li>
//               <li>Pre-exhaustion Training</li>
//               <li>Half Repetitions</li>
//               <li>Pause Repetitions</li>
//             </ul>
//         </li>
//       </ul>
//     </div>
//   )
// }


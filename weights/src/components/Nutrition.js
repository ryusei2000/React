import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default class Nutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  occur: false,
                  value2: ''};


    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.setState({value: e.target.innerHTML})
    this.setState({value2: e.target.id});
    this.setState({occur: true});
    e.preventDefault();
  }


  render() {
    return(
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="drop-down-basic">
            Bodyweight
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item id="105" onClick={this.handleSelect}>100-110 lbs</Dropdown.Item>
            <Dropdown.Item id="115" onClick={this.handleSelect}>110-120 lbs</Dropdown.Item>
            <Dropdown.Item id="125" onClick={this.handleSelect}>120-130 lbs</Dropdown.Item>
            <Dropdown.Item id="135" onClick={this.handleSelect}>130-140 lbs</Dropdown.Item>
            <Dropdown.Item id="145" onClick={this.handleSelect}>140-150 lbs</Dropdown.Item>
            <Dropdown.Item id="155" onClick={this.handleSelect}>150-160 lbs</Dropdown.Item>
            <Dropdown.Item id="165" onClick={this.handleSelect}>160-170 lbs</Dropdown.Item>
            <Dropdown.Item id="175" onClick={this.handleSelect}>170-180 lbs</Dropdown.Item>
            <Dropdown.Item id="185" onClick={this.handleSelect}>180-190 lbs</Dropdown.Item>
            <Dropdown.Item id="195" onClick={this.handleSelect}>190-200 lbs</Dropdown.Item>
            <Dropdown.Item id="205" onClick={this.handleSelect}>200-210 lbs</Dropdown.Item>
            <Dropdown.Item id="215" onClick={this.handleSelect}>210-220 lbs</Dropdown.Item>
            <Dropdown.Item id="225" onClick={this.handleSelect}>220-230 lbs</Dropdown.Item>
            <Dropdown.Item id="235" onClick={this.handleSelect}>230-240 lbs</Dropdown.Item>
            <Dropdown.Item id="245" onClick={this.handleSelect}>240-250 lbs</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <hr/>
        { this.state.occur ? <Paragraph weight={this.state.value2} range={this.state.value} /> : null}
      </div>
    )
  }

}

// continue on with this trend (do this for the other values)
class Paragraph extends React.Component {
  render() {
    if (localStorage.my_value === "Maintain") {
      return(
      <div>
        <p>For {this.props.range}:</p>
        <p>
          At your current weight, to maintain your body weight you should
          aim for around { this.props.weight * 15 } calories!
        </p>
        <p>
          If you're aiming to maintain muscle, you should aim to have
          around { Math.round(this.props.weight * 0.85) } grams of protein in your daily diet
          as a general range for protein consumption for increases in muscle mass
          is about 0.7-1.0 grams of protein per pound of body weight.
        </p>
        <p>
          For dietary reference, a single average chicken thigh is about 28 grams of
          protein and around 206 calories. Another common staple is greek yogurt,
          which has around 20 grams of protein and 146 calories in a single serving
          (around one cup).
        </p>
      </div>);
    } else if (localStorage.my_value === "Bulk") {
      return(
        <div className="Paragraph">
          <p>For {this.props.range}:</p>
          <p>
            If you're aiming to bulk, you should aim for
            around { this.props.weight *15 + 300 } calories. </p>
          <p>
            If you're aiming to gain muscle, you should aim to have
            around { Math.round(this.props.weight * 0.85) } grams of protein in your daily diet
            as a general range for protein consumption for increases in muscle mass
            is about 0.7-1.0 grams of protein per pound of body weight.
          </p>
          <p>
            For dietary reference, a single average chicken thigh is about 28 grams of
            protein and around 206 calories. Another common staple is greek yogurt,
            which has around 20 grams of protein and 146 calories in a single serving
            (around one cup).
          </p>
        </div>
      )
    } else {
      return(
        <div>
          <p>For {this.props.range}:</p>
          <p>
            If you would like
            to lose weight, you should aim for around { this.props.weight * 15 - 300 } calories.
          </p>
          <p>
            If you're aiming to gain muscle, you should aim to have
            around { Math.round(this.props.weight * 0.85) } grams of protein in your daily diet
            as a general range for protein consumption for increases in muscle mass
            is about 0.7-1.0 grams of protein per pound of body weight.
          </p>
          <p>
            For dietary reference, a single average chicken thigh is about 28 grams of
            protein and around 206 calories. Another common staple is greek yogurt,
            which has around 20 grams of protein and 146 calories in a single serving
            (around one cup).
          </p>
        </div>
      )
    }
  }
}


/*
<p>At your current weight, to maintain your bodyweight you should
        aim for around { this.state.value * 15 } calories!</p>

class Paragraph extends React.Component {
  render() {
    if (this.state.current === true) {
      return(
        <div className="Paragraph">
          <p>At your current weight, to maintain your bodyweight you should
          aim for around { this.state.value * 15 } calories!</p>
        </div>
      )
    }
  }
}
*/
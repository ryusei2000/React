import React from 'react';

export default class Nutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  occur: false,
                  value2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({value2: this.state.value});
    this.setState({occur: true});
    console.log(this.state.value);
    event.preventDefault();
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Bodyweight:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        { this.state.occur ? <Paragraph weight={this.state.value2} /> : null}
      </div>
    )
  }

}

class Paragraph extends React.Component {
  render() {
      return(
        <div className="Paragraph">
          <p>
            At your current weight, to maintain your body weight you should
            aim for around { this.props.weight * 15 } calories! If you would like
            to lose weight, you should aim for around { this.props.weight * 15 - 300 } calories.
            If you're aiming to bulk, you should aim for
            around { this.props.weight *15 +300 } calories. </p>
          <p>
            If you're aiming to gain muscle, you should aim to have
            around { this.props.weight * 0.85 } grams of protein in your daily diet
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
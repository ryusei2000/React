import React from 'react';


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
      </>
    )
  }
}

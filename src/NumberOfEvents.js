import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: "32"
  }

  handleInputChanged = (event) => {
    const newNumberOfEvents = event.target.value;
    this.setState({
      numberOfEvents: newNumberOfEvents
    });
  };


  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}


export default NumberOfEvents;
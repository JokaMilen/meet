import React, { Component } from 'react';

class NumberOfEvents extends Component {

  handleInputChanged = (event) => {
    const newNumberOfEvents = event.target.value;
    this.props.updateNumberOfEvents(newNumberOfEvents);
  };


  render() {
    const { numberOfEvents } = this.props;
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}


export default NumberOfEvents;
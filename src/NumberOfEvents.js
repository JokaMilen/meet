import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    errorAlertText: ''
  }

  handleInputChanged = (event) => {
    const newNumberOfEvents = event.target.value;
    this.props.updateNumberOfEvents(newNumberOfEvents);

    if (newNumberOfEvents >= 1 && newNumberOfEvents <= 32) {
      this.setState({
        errorAlertText: ''
      });
    } else {
      this.setState({
        errorAlertText: 'Select number from 1 to 32'
      });
    }
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
        <ErrorAlert text={this.state.errorAlertText} />
      </div>
    );
  }
}


export default NumberOfEvents;
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
        <section>
          <label htmlFor="number" className="inputLabel">Number of events:</label>
          <input
            id="number"
            type="number"
            className="number"
            value={numberOfEvents}
            onChange={this.handleInputChanged}
            autoComplete="off"
          />

          <ErrorAlert text={this.state.errorAlertText} />
        </section>
      </div>
    );
  }
}


export default NumberOfEvents;
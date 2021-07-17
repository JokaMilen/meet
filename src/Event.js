import React, { Component } from "react";

class Event extends Component {

  state = {
    showDetails: false
  }

  changeState() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    const { event } = this.props;
    return (
      <div className="Event">
        <h1 className="summary">{event.summary}</h1>
        <p className="date">{event.start.dateTime + " (" + event.start.timeZone + ")"}</p>
        <p className="location">{"@" + event.summary + " | " + event.location}</p>

        {
          this.state.showDetails ?
            <div>
              <h2 className="about">About event:</h2>
              <a className="link" href={event.htmlLink}>See details on Google Calendar</a>
              <p className="description">{event.description}</p>
            </div>
            : null
        }
        <button className="details-button" onClick={() => this.changeState()}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
      </div>
    );
  }
}

export default Event;
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    location: "all",
    numberOfEvents: 32,
    offlineAlertText: ''
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      });
    });

    this.setState({
      location: location
    });
  }

  updateNumberOfEvents = (newNumberOfEvents) => {
    this.setState({
      numberOfEvents: newNumberOfEvents,
    });
    this.updateEvents(this.state.location);
  }

  componentDidMount() {
    this.mounted = true;

    var online = navigator.onLine;
    if (online === false) {
      this.setState({
        offlineAlertText: "No internet, list is not up to date"
      });
    }

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <OfflineAlert text={this.state.offlineAlertText} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;

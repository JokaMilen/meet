import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    location: "all",
    numberOfEvents: 32,
    offlineAlertText: '',
    showWelcomeScreen: undefined
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

  async componentDidMount() {
    this.mounted = true;

    const isLocalhost = window.location.href.startsWith('http://localhost');
    var isValidated = false;

    if (!isLocalhost) {
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false :
        true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      isValidated = (code || isTokenValid);
    }


    this.setState({ showWelcomeScreen: !isLocalhost && !isValidated });


    if ((isLocalhost || isValidated) && this.mounted) {
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
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    return (
      <div className="App">
        <h2>Meet App</h2><br /><br />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <OfflineAlert text={this.state.offlineAlertText} />
        <ResponsiveContainer height={400} >
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;

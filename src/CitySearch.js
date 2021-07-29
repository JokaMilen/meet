import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return value.length > 0 && location.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    }).slice(0, 10);
    if (suggestions.length === 0 && value.length > 0) {
      this.setState({
        query: value,
        suggestions,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: ''
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
          onBlur={() => { this.setState({ showSuggestions: false }) }}
        />
        <InfoAlert text={this.state.infoText} />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
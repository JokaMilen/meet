import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test('render event summary', () => {
    let summaryElement = EventWrapper.find('.summary');
    expect(summaryElement).toHaveLength(1);
    expect(summaryElement.text()).toBe(event.summary);
  });

  test('render date and time', () => {
    let eventDate = EventWrapper.find('.date');
    expect(eventDate).toHaveLength(1);
    expect(eventDate.text()).toBe(event.start.dateTime + " (" + event.start.timeZone + ")");
  });

  test('render location', () => {
    let eventLocation = EventWrapper.find('.location');
    expect(eventLocation).toHaveLength(1);
    expect(eventLocation.text()).toBe("@" + event.summary + " | " + event.location);
  });

  test('render show details button', () => {
    EventWrapper.setState({
      showDetails: false
    });
    let buttonShowDetails = EventWrapper.find('.details-button');
    expect(buttonShowDetails).toHaveLength(1);
    expect(buttonShowDetails.text()).toBe('Show Details');
  });

  test('render hide details button', () => {
    EventWrapper.setState({
      showDetails: true
    });
    let buttonHideDetails = EventWrapper.find('.details-button');
    expect(buttonHideDetails).toHaveLength(1);
    expect(buttonHideDetails.text()).toBe('Hide Details');
  });

  test('button change state', () => {
    EventWrapper.setState({
      showDetails: false
    });
    let button = EventWrapper.find('.details-button');
    button.simulate('click');
    expect(EventWrapper.state('showDetails')).toEqual(true);
    button.simulate('click');
    expect(EventWrapper.state('showDetails')).toEqual(false);
  });

  test('render about', () => {
    EventWrapper.setState({
      showDetails: false
    });
    let about = EventWrapper.find('.about');
    expect(about).toHaveLength(0);

    EventWrapper.setState({
      showDetails: true
    });
    about = EventWrapper.find('.about');
    expect(about).toHaveLength(1);
    expect(about.text()).toBe("About event:");
  });

  test('render description', () => {
    EventWrapper.setState({
      showDetails: false
    });
    let description = EventWrapper.find('.description');
    expect(description).toHaveLength(0);

    EventWrapper.setState({
      showDetails: true
    });
    description = EventWrapper.find('.description');
    expect(description).toHaveLength(1);
    expect(description.text()).toBe(event.description);
  });

  test('render google calendar link', () => {
    EventWrapper.setState({
      showDetails: false
    });
    let calendarLink = EventWrapper.find('.link');
    expect(calendarLink).toHaveLength(0);

    EventWrapper.setState({
      showDetails: true
    });
    calendarLink = EventWrapper.find('.link');
    expect(calendarLink).toHaveLength(1);
    expect(calendarLink.text()).toBe('See details on Google Calendar');
    expect(calendarLink.prop('href')).toBe(event.htmlLink);
  });

});
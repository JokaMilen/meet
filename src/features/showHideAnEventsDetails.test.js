import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';
import EventList from '../EventList';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let EventListWrapper;
  let EventWrappers;

  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the list of upcoming events is shown', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
    });

    when('no action by user', () => {

    });

    then('event element is collapsed by default', () => {
      EventWrappers = EventListWrapper.find(Event);
      EventWrappers.forEach((EventWrapper) => {
        expect(EventWrapper.state('showDetails')).toBe(false);
      })
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {

    given('the event list is shown', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
    });

    let EventWrapper;
    when('user clicks on the collapsed event (“Show details” button)', () => {
      EventWrappers = EventListWrapper.find(Event);
      EventWrapper = EventWrappers.at(0);
      EventWrapper.find('.details-button').simulate('click');
    });

    then('event is expended showing details', () => {
      expect(EventWrapper.state('showDetails')).toBe(true);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let EventWrapper;
    given('the event is expended and showing details', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.setState({ showDetails: true });
    });

    when('user clicks “Hide details” button', () => {
      EventWrapper.find('.details-button').simulate('click');
    });

    then('user can collapse and event to hide details', () => {
      expect(EventWrapper.state('showDetails')).toBe(false);
    });
  });
});
import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOFEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, and, when, then }) => {

    let AppWrapper;
    let EventListWrapper;
    given('the user opened an app', () => {
      AppWrapper = mount(<App />);
    });

    and('the list is shown', () => {
      AppWrapper.update();
      EventListWrapper = AppWrapper.find(EventList);
    });

    when('user does not enter the number of events', () => {

    });

    then('32 events will be shown by default', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;
    given('the list of events is shown', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    let NumberOfEventsWrapper;
    let newNumberOfEvents = 1;
    when('user enters the number of events to be listed', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const eventObject = { target: { value: newNumberOfEvents } };
      NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    });

    then('only that specific number of events will be shown', () => {
      AppWrapper.update();
      expect(AppWrapper.find(EventList).find('.event')).toHaveLength(newNumberOfEvents);
    });
  });

});
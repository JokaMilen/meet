import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('default number input value', () => {
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
  });

  test('change state when text input changes', () => {
    let numberOfEvents = 32;
    let numberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={(n) => numberOfEvents = n} />);

    const eventObject = { target: { value: 20 } };
    numberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(numberOfEvents).toBe(20);
  });

  test('change state when text input changes', () => {
    let numberOfEvents = 74;
    let numberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={numberOfEvents} />);
    expect(numberOfEventsWrapper.find('.number').prop('value')).toBe(74);
  });


});
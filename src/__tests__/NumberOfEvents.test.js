import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('default number input value', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual("32");
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe("32");
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: '20' } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('20');
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: "74" });
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe("74");
  });


});
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Statistics from "./statistics";

configure({ adapter: new Adapter() });

describe('Test Statistics component', () => {
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      min: null,
      max: null,
      total: 0,
      phoneNumbers: []
    };
    shallowComponent = shallow(<Statistics {...defaultProps} />)
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });
});
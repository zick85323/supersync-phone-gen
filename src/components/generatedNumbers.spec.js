import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GeneratedNumbers from "./generatedNumbers";

configure({ adapter: new Adapter() });

describe('Test GeneratedNumbers component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      phoneNumbers: []

    };
    shallowComponent = shallow(<GeneratedNumbers {...defaultProps} />);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });
});
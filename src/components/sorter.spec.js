import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorter from "./sorter";

configure({ adapter: new Adapter() });

describe('Test Sorter component', () => {
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      phoneNumbers: [],
      onChange: () => {}
    };
    shallowComponent = shallow(<Sorter {...defaultProps} />)
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });
});
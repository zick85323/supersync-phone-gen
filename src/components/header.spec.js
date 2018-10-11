import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "./header";

configure({ adapter: new Adapter() });

describe('Test Header component', () => {
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {

    };
    shallowComponent = shallow(<Header/>);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });
});
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExportButton from "./exportButton";

configure({ adapter: new Adapter() });

describe('Test ExportButton component', () => {
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      phoneNumbers: [],
      onClick: () => {}
    };
    shallowComponent = shallow(<ExportButton {...defaultProps} />);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });

  test('should render text', () => {
    shallowComponent.setProps({
      phoneNumbers: ['3242234', '324344']
    });
    expect(shallowComponent.find('button').text()).toContain('Export')
  });
});
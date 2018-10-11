import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App Test', () => {
  let instance;
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<App />);
    instance = shallowComponent.instance();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });

  test('should set error to true and message', () => {
    const event = {
      preventDefault: () => {},
    };
    shallowComponent.setState({ limit: 20000 });
    instance.generateRandomPhoneNumber(event);
    const state = shallowComponent.state();
    expect(state.limit).toEqual(20000);
    expect(state.error).toBe(true);
    expect(state.message).toBe("The number entered exceeds the accepted limit");
  });

  test('should generate phone numbers', () => {
    const event = {
      preventDefault: () => {},
    };
    shallowComponent.setState({ limit: 20 });
    instance.generateRandomPhoneNumber(event);
    const state = shallowComponent.state();
    expect(state.limit).toEqual(20);
    expect(state.error).toBe(false);
    expect(state.phoneNumbers.length).toBeGreaterThan(1)
  });

  test('should update the stats', () => {
    const event = {
      preventDefault: () => {},
    };
    shallowComponent.setState({ limit: 20 });
    instance.generateRandomPhoneNumber(event);
    const state = shallowComponent.state();
    expect(state.total).toBe(20);
    expect(state.min).toBeDefined();
    expect(state.max).toBeDefined();
  });

  test('should set limit', async () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 20
      }
    };
    await instance.onGetUserInput(event);
    const state = shallowComponent.state();
    expect(state.limit).toBe(20);
  });

  test('should not change the limit', async () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 'fsgg'
      }
    };
    await instance.onGetUserInput(event);
    const state = shallowComponent.state();
    expect(state.limit).toBe(1);
  });

  test('should set statistics', () => {
    shallowComponent.setState({ phoneNumbers: ['09876098765', '09876543']});
    instance.setStatistics();
    const state = shallowComponent.state();
    expect(state.total).toBe(2);
    expect(state.min).toBeDefined();
    expect(state.max).toBeDefined();
  });
});

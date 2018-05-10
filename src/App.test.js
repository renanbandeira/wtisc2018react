import React from 'react';
import { mountElement } from '../test/helpers/enzyme';
import App from './App';

it('renders without crashing', () => {
  const component = mountElement(<App />);
  expect(component.find('App')).toHaveLength(1);
});

it('renders with name passed by props', () => {
  const component = mountElement(<App name="WTISC 2018" />);
  expect(component.find('App')).toHaveLength(1);
  const text = component.find('p').text();
  expect(text).toEqual('Welcome to WTISC 2018');
});

it('calls set name and renders correctly without crashing', () => {
  const component = mountElement(<App name="WTISC 2018" />);
  expect(component.find('App')).toHaveLength(1);
  const button = component.find('button');
  expect(button).toHaveLength(1);
  let text = component.find('p').text();
  expect(text).toEqual('Welcome to WTISC 2018');
  button.simulate('click');
  text = component.find('p').text();
  expect(text).toEqual('Welcome to ReactJS Training');
});

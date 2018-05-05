import React from 'react';
import { mountElement } from '../test/helpers/enzyme';
import App from './App';

it('renders without crashing', () => {
  const component = mountElement(<App />);
  expect(component.find('.App-intro')).toHaveLength(1);
  const button = component.find('button');
  expect(button).toHaveLength(1);
  let text = component.find('h1').text();
  expect(text).toEqual('Welcome to WTISC 2018');
  button.simulate('click');
  text = component.find('h1').text();
  expect(text).toEqual('Welcome to ReactJS Training');
});

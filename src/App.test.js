import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, wait } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check the content of the file', async () => {
  const {getByText} = render(<App />);
  const learnReact = 'Learn React';
  await wait(() => getByText(learnReact));
  expect(getByText(learnReact)).toBeTruthy();
});
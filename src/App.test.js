import React from 'react';
import { render } from '@testing-library/react';
import ReactDom from 'react-dom';
import App from './App';



test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
});


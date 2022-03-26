import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders elden ring message generator heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/elden ring message generator/i);
  expect(linkElement).toBeInTheDocument();
});

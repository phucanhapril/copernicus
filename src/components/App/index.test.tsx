import { render } from '@testing-library/react';
import React from 'react';
import { App } from '.';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it.skip("adds a doctor's task list when doctor is selected", () => {
    // Skip
  });

  it.skip("removes doctor's task list if doctor is reselected", () => {
    // Skip
  });

  it.skip('can show multiple task lists', () => {
    // Skip
  });
});

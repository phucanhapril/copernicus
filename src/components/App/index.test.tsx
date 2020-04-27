import { render } from '@testing-library/react';
import React from 'react';
import { App } from '.';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it.todo("adds a doctor's task list when doctor is selected");
  it.todo("removes doctor's task list if doctor is reselected");
  it.todo('can show multiple task lists');
});

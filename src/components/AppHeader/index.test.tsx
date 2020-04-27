import { render } from '@testing-library/react';
import React from 'react';
import { AppHeader } from '.';

describe('AppHeader', () => {
  it('renders without crashing', () => {
    render(<AppHeader />);
  });
});

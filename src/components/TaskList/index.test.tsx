import { render } from '@testing-library/react';
import React from 'react';
import { MOCK_TASKS } from 'constants/mocks';
import { TaskList } from '.';

describe('TaskList', () => {
  it('renders without crashing', () => {
    render(<TaskList tasks={MOCK_TASKS} />);
  });

  it('renders empty status if no tasks', () => {
    const test = render(<TaskList tasks={[]} />);
    expect(test.getByText('🏝')).toBeTruthy();
  });

  it.todo('renders tasks in desc. priority');
});

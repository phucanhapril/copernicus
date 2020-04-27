import { render } from '@testing-library/react';
import React from 'react';
import { MOCK_TASKS } from 'constants/mocks';
import { TaskList } from '.';

describe('TaskList', () => {
  it('renders without crashing', () => {
    render(<TaskList tasks={MOCK_TASKS} />);
  });

  it.todo('renders tasks in desc. priority');
  it.todo('renders empty status if no tasks');
});

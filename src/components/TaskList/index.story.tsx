import { boolean, text } from '@storybook/addon-knobs';
import React, { FC } from 'react';
import { MOCK_TASKS, MOCK_DOCTORS } from 'constants/mocks';
import { StorybookWrapper } from 'utils/testing';
import { TaskList } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  component: TaskList,
  decorators: [
    (storyFn: () => FC) => <StorybookWrapper>{storyFn()}</StorybookWrapper>,
  ],
  title: 'TaskList',
};

export const Default: FC = () => (
  <TaskList
    loading={boolean('Loading', false)}
    tasks={
      boolean('Has tasks', true)
        ? MOCK_TASKS.filter((task) => task.doctorId === MOCK_DOCTORS[2].id)
        : []
    }
    title={text(
      'Title',
      `${MOCK_DOCTORS[2].firstName} ${MOCK_DOCTORS[2].lastName}`
    )}
  />
);

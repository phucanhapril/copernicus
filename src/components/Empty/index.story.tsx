import { text } from '@storybook/addon-knobs';
import React, { FC } from 'react';
import { StorybookWrapper } from 'utils/testing';
import { Empty } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  component: Empty,
  decorators: [
    (storyFn: () => FC) => <StorybookWrapper>{storyFn()}</StorybookWrapper>,
  ],
  title: 'Empty',
};

export const Default: FC = () => (
  <Empty
    ariaLabel="emoji-label"
    emoji={text('Emoji', '😱')}
    message={text('Message', 'omg')}
  />
);

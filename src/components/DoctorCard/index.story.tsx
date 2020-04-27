import { action } from '@storybook/addon-actions';
import { text, date, boolean } from '@storybook/addon-knobs';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { StorybookWrapper } from 'utils/testing';
import { DoctorCard } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  component: DoctorCard,
  decorators: [
    (storyFn: () => FC) => <StorybookWrapper>{storyFn()}</StorybookWrapper>,
  ],
  title: 'DoctorCard',
};

export const Default: FC = () => {
  const firstName = text('First name', 'Theodor');
  const lastName = text('Last name', 'Seuss');
  const degree = text('Degree', 'MD');
  const dob = format(date('Dob', new Date()), 'MM/dd/yyyy');
  const selected = boolean('Selected', false);

  return (
    <DoctorCard
      doctor={{ degree, dob, firstName, id: 'doctorId', lastName }}
      onClick={action('Click')}
      selected={selected}
    />
  );
};

import { action } from '@storybook/addon-actions';
import { text, date, boolean } from '@storybook/addon-knobs';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { StorybookWrapper } from 'utils/testing';
import { DoctorListCard } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  component: DoctorListCard,
  decorators: [
    (storyFn: () => FC) => <StorybookWrapper>{storyFn()}</StorybookWrapper>,
  ],
  title: 'DoctorListCard',
};

export const Default: FC = () => {
  const firstName = text('First name', 'Theodor');
  const lastName = text('Last name', 'Seuss');
  const degree = text('Degree', 'MD');
  const dob = format(date('Dob', new Date()), 'MM/dd/yyyy');
  const selected = boolean('Selected', false);

  return (
    <DoctorListCard
      degree={degree}
      dob={dob}
      doctorId="doctorId"
      firstName={firstName}
      lastName={lastName}
      onClick={action('Click')}
      selected={selected}
    />
  );
};

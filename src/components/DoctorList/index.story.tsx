import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { FC } from 'react';
import { MOCK_DOCTORS } from 'constants/mocks';
import { StorybookWrapper } from 'utils/testing';
import { DoctorList } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  component: DoctorList,
  decorators: [
    (storyFn: () => FC) => <StorybookWrapper>{storyFn()}</StorybookWrapper>,
  ],
  title: 'DoctorList',
};

export const Default: FC = () => (
  <DoctorList
    doctors={MOCK_DOCTORS}
    loading={boolean('Loading', false)}
    onDoctorClick={action('Click doctor')}
    selectedDoctorIds={
      boolean('Some selected', false)
        ? [MOCK_DOCTORS[0].doctorId, MOCK_DOCTORS[2].doctorId]
        : []
    }
  />
);

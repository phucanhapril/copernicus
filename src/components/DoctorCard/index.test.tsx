import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { DoctorCard } from '.';

describe('DoctorCard', () => {
  it('renders without crashing', () => {
    render(
      <DoctorCard
        doctor={{
          dob: '03/02/1904',
          firstName: 'Theodor',
          id: 'doctorId',
          lastName: 'Seuss',
        }}
        onClick={jest.fn()}
      />
    );
  });

  it('triggers onClick correctly', () => {
    const onClick = jest.fn();
    const test = render(
      <DoctorCard
        doctor={{
          dob: '03/02/1904',
          firstName: 'Theodor',
          id: 'doctorId',
          lastName: 'Seuss',
        }}
        onClick={onClick}
      />
    );

    fireEvent.click(test.getByText('Theodor', { exact: false }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith('doctorId');
  });
});

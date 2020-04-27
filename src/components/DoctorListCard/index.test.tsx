import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { DoctorListCard } from '.';

describe('DoctorListCard', () => {
  it('renders without crashing', () => {
    render(
      <DoctorListCard
        dob="03/02/1904"
        doctorId="doctorId"
        firstName="Theodor"
        lastName="Seuss"
        onClick={jest.fn()}
      />
    );
  });

  it('triggers onClick correctly', () => {
    const onClick = jest.fn();
    const test = render(
      <DoctorListCard
        dob="03/02/1904"
        doctorId="doctorId"
        firstName="Theodor"
        lastName="Seuss"
        onClick={onClick}
      />
    );

    fireEvent.click(test.getByText('Theodor', { exact: false }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith('doctorId');
  });
});

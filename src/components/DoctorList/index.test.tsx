import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { MOCK_DOCTORS } from 'constants/mocks';
import { DoctorList } from '.';

describe('DoctorList', () => {
  it('renders without crashing', () => {
    render(<DoctorList doctors={MOCK_DOCTORS} onDoctorClick={jest.fn()} />);
    render(
      <DoctorList
        doctors={MOCK_DOCTORS}
        onDoctorClick={jest.fn()}
        selectedDoctorIds={MOCK_DOCTORS.map((doc) => doc.id)}
      />
    );
  });

  it('triggers onDoctorClick correctly', () => {
    const onDoctorClick = jest.fn();
    const test = render(
      <DoctorList doctors={MOCK_DOCTORS} onDoctorClick={onDoctorClick} />
    );

    const doctor = MOCK_DOCTORS[0];
    fireEvent.click(test.getByText(doctor.firstName, { exact: false }));
    expect(onDoctorClick).toHaveBeenCalledTimes(1);
    expect(onDoctorClick).toHaveBeenCalledWith(doctor.id);
  });

  it('renders empty status if no doctors', () => {
    const test = render(<DoctorList doctors={[]} onDoctorClick={jest.fn()} />);
    expect(test.getByText('😱')).toBeTruthy();
  });

  it('filters correctly', () => {
    const test = render(
      <DoctorList doctors={MOCK_DOCTORS} onDoctorClick={jest.fn()} />
    );

    const doctor = MOCK_DOCTORS[1];
    const input = test.getByDisplayValue('');
    fireEvent.change(input, {
      target: { value: `${doctor.firstName.slice(0, 2)} ${doctor.lastName}` },
    });
    expect(test.getByText(doctor.firstName, { exact: false })).toBeTruthy();
    expect(test.queryByText(MOCK_DOCTORS[0].firstName)).toBeFalsy();
  });

  it('renders no results status if filter returns no results', () => {
    const test = render(
      <DoctorList doctors={MOCK_DOCTORS} onDoctorClick={jest.fn()} />
    );

    const input = test.getByDisplayValue('');
    fireEvent.change(input, {
      target: { value: `claude debussy` },
    });
    expect(test.getByText('No results')).toBeTruthy();
  });
});

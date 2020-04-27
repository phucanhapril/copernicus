import { TDoctor } from 'types/doctor';

export const formatDoctorName = ({
  degree,
  firstName,
  lastName,
}: Pick<TDoctor, 'degree' | 'firstName' | 'lastName'>): string =>
  `${firstName} ${lastName}${degree ? `, ${degree}` : ''}`;

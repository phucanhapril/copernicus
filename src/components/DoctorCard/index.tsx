import { Card } from '@material-ui/core';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { TDoctor } from 'types/doctor';
import { formatDoctorName } from 'utils/doctor';

interface Props {
  doctor: TDoctor;
  onClick: (doctorId: string) => void;
  selected?: boolean;
}

/** Card representing a doctor */
const DoctorCard: FC<Props> = ({ doctor, onClick, selected }) => {
  return (
    <CardStyled
      elevation={0}
      onClick={() => onClick(doctor.id)}
      selected={selected}
    >
      <Name>{formatDoctorName(doctor)}</Name>
      <Details>{doctor.dob}</Details>
    </CardStyled>
  );
};

const CardStyled = styled(Card)<{ selected: Props['selected'] }>`
  &&& {
    background-color: ${({ selected }) =>
      selected ? theme.color.apricot : 'white'};
    cursor: pointer;
    padding: ${theme.space.m};
  }
`;

const Details = styled.div`
  font-size: ${theme.font.size.s};
`;

const Name = styled.div`
  ${theme.font.mixins.ellipsisOverflow}
  margin-bottom: ${theme.space.s};
`;

export { DoctorCard };

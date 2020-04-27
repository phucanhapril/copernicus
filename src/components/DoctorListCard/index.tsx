import Card from '@material-ui/core/Card';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { TDoctor } from 'types/doctor';

interface Props extends TDoctor {
  onClick: (doctorId: string) => void;
  selected?: boolean;
}

/** Card representing a doctor */
const DoctorListCard: FC<Props> = ({
  degree,
  dob,
  doctorId,
  firstName,
  lastName,
  onClick,
  selected,
}) => {
  return (
    <CardStyled
      elevation={0}
      onClick={() => onClick(doctorId)}
      selected={selected}
    >
      <Name>
        {firstName} {lastName}
        {degree && `, ${degree}`}
      </Name>
      <Details>{dob}</Details>
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

export { DoctorListCard };

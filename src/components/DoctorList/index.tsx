import { CircularProgress } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { DoctorCard } from 'components/DoctorCard';
import { theme } from 'styles/theme';
import { TDoctor } from 'types/doctor';

interface Props {
  doctors: TDoctor[];
  loading?: boolean;
  onDoctorClick: (doctorId: string) => void;
  selectedDoctorIds?: string[];
}

/** List of doctors displayed as cards */
const DoctorList: FC<Props> = ({
  doctors,
  loading,
  onDoctorClick,
  selectedDoctorIds,
}) => {
  if (loading) {
    return (
      <StylesLoading>
        <CircularProgressStyled />
      </StylesLoading>
    );
  }

  return (
    <Styles>
      {sortBy(doctors, 'lastName').map((doctor) => (
        <DoctorCardContainer key={`DoctorList_card${doctor.id}`}>
          <DoctorCard
            doctor={doctor}
            onClick={onDoctorClick}
            selected={selectedDoctorIds?.includes(doctor.id)}
          />
        </DoctorCardContainer>
      ))}
    </Styles>
  );
};

const CircularProgressStyled = styled(CircularProgress)`
  &&& {
    color: ${theme.color.brightSun};
  }
`;

const DoctorCardContainer = styled.div`
  :not(:last-child) {
    margin-bottom: ${theme.space.m};
  }
`;

const Styles = styled.div`
  width: 100%;
`;
const StylesLoading = styled(Styles)`
  display: flex;
  justify-content: center;
`;

export { DoctorList };

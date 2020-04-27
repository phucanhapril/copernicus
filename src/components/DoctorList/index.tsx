import CircularProgress from '@material-ui/core/CircularProgress';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { DoctorListCard } from 'components/DoctorListCard';
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
      {doctors.map((doc) => (
        <DoctorListCardContainer key={`DoctorList_card${doc.doctorId}`}>
          <DoctorListCard
            {...doc}
            onClick={onDoctorClick}
            selected={selectedDoctorIds?.includes(doc.doctorId)}
          />
        </DoctorListCardContainer>
      ))}
    </Styles>
  );
};

const CircularProgressStyled = styled(CircularProgress)`
  &&& {
    color: ${theme.color.brightSun};
  }
`;

const DoctorListCardContainer = styled.div`
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
  padding-top: ${theme.space.xl};
`;

export { DoctorList };

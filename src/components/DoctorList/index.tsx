import { CircularProgress, TextField } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { DoctorCard } from 'components/DoctorCard';
import { Empty } from 'components/Empty';
import { theme } from 'styles/theme';
import { TDoctor } from 'types/doctor';
import { formatDoctorName } from 'utils/doctor';

interface Props {
  doctors: TDoctor[];
  loading?: boolean;
  onDoctorClick: (doctorId: string) => void;
  selectedDoctorIds?: string[];
}

/** Filterable list of doctors displayed as cards */
const DoctorList: FC<Props> = ({
  doctors,
  loading,
  onDoctorClick,
  selectedDoctorIds,
}) => {
  /** Filter doctors based on input */
  const [filterInput, setFilterInput] = useState<string>();
  const filteredDoctors = filterInput
    ? doctors.filter((doctor) =>
        isEveryWordIncluded(filterInput, formatDoctorName(doctor))
      )
    : doctors;

  if (loading) {
    return (
      <StylesLoading>
        <CircularProgressStyled />
      </StylesLoading>
    );
  }

  if (doctors.length === 0) {
    return (
      <Empty
        ariaLabel="scream-something-went-wrong"
        emoji="😱"
        message={
          <>
            <div>Please refresh</div>
            <div>to find the doctors</div>
          </>
        }
      />
    );
  }

  return (
    <Styles>
      <TextFieldStyled
        id="DoctorList_filter"
        label="Filter"
        onChange={(e) => setFilterInput(e.target.value)}
        value={filterInput}
        variant="outlined"
      />
      {filteredDoctors.length === 0 ? (
        <Empty ariaLabel="no-search-matches" emoji="🔮" message="No results" />
      ) : (
        sortBy(filteredDoctors, 'lastName').map((doctor) => (
          <DoctorCardContainer key={`DoctorList_card${doctor.id}`}>
            <DoctorCard
              doctor={doctor}
              onClick={onDoctorClick}
              selected={selectedDoctorIds?.includes(doctor.id)}
            />
          </DoctorCardContainer>
        ))
      )}
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

const TextFieldStyled = styled(TextField)`
  &&& {
    margin-bottom: ${theme.space.m};
    width: 100%;
    * {
      font-family: ${theme.font.family.body};
    }
    .Mui-focused {
      color: ${theme.color.oldGold};
      fieldset {
        border-color: ${theme.color.oldGold};
      }
      input {
        color: ${theme.color.haiti};
      }
    }
  }
`;

// Helpers
/**
 * Checks if every word from the input is included in the string being tested.
 * Input "hel worl" with test string "Hello world" would return true because
 * every word in the input can be found in the test string
 */
const isEveryWordIncluded = (input: string, testString: string): boolean => {
  const testWords = testString.toLowerCase().split(' ');
  return input
    .toLowerCase()
    .split(' ')
    .every(
      (inputWord) =>
        testWords.find((testWord) => testWord.includes(inputWord)) !== undefined
    );
};

export { DoctorList };

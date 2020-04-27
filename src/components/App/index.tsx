import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { AppHeader } from 'components/AppHeader';
import { DoctorList } from 'components/DoctorList';
import { ENDPOINTS } from 'constants/api';
import { theme } from 'styles/theme';
import { TDoctor } from 'types/doctor';
import { mapApiDoctorFields } from 'utils/map';

/** Entryway to app */
const App: FC = () => {
  const [doctors, setDoctors] = useState<TDoctor[]>();
  useEffect(() => {
    fetch(ENDPOINTS.listDoctors)
      .then((res) => res.json())
      .then(
        (doctors) => setDoctors(doctors.map(mapApiDoctorFields)),
        (error) => console.error(error)
      );
  }, []);

  const [selectedDoctors, setSelectedDoctors] = useState<string[]>([]);
  const onDoctorSelect = (doctorId: string): void => {
    setSelectedDoctors((currIds) =>
      currIds.includes(doctorId)
        ? currIds.filter((id) => id !== doctorId)
        : [...currIds, doctorId]
    );
  };

  return (
    <>
      <AppHeader />
      <Content>
        <DoctorListContainer>
          <DoctorListTitle>Doctors</DoctorListTitle>
          <DoctorList
            doctors={doctors || []}
            loading={!doctors}
            onDoctorClick={onDoctorSelect}
            selectedDoctorIds={selectedDoctors}
          />
        </DoctorListContainer>

        <TaskView>
          {selectedDoctors.map((doctorId) => (
            <TaskList>task list {doctorId}</TaskList>
          ))}
        </TaskView>
      </Content>
    </>
  );
};

const Content = styled.div`
  background-color: ${theme.color.springWood};
  display: flex;
  height: calc(100vh - ${theme.layout.headerHeight});
  width: 100%;
`;

const DoctorListContainer = styled.div`
  border-right: 1px solid ${theme.color.casper};
  padding: ${theme.space.m};
  width: ${theme.layout.minMobileWidth};
`;
const DoctorListTitle = styled.h3`
  padding-left: ${theme.space.s};
  margin-bottom: ${theme.space.m};
`;

const TaskList = styled.div``;
const TaskView = styled.div`
  display: flex;
  padding: ${theme.space.m};
  width: 100%;
`;

export { App };

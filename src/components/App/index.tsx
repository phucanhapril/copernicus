import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { AppHeader } from 'components/AppHeader';
import { DoctorList } from 'components/DoctorList';
import { TaskList } from 'components/TaskList';
import { ENDPOINTS } from 'constants/api';
import { theme } from 'styles/theme';
import { TDoctor, TDoctorTask } from 'types/doctor';
import { formatDoctorName } from 'utils/doctor';
import { mapApiDoctorFields, mapApiTaskFields } from 'utils/map';

/** Entryway to app. Contains state for doctor/task selection */
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
  const [tasks, setTasks] = useState<{
    [doctorId: string]: TDoctorTask[];
  }>({});

  const onDoctorSelect = (doctorId: string): void => {
    // Get tasks if the doctor was selected (vs. unselected)
    if (!selectedDoctors.includes(doctorId)) {
      fetch(ENDPOINTS.getTasks(doctorId))
        .then((res) => res.json())
        .then(
          (tasks) =>
            setTasks((currTasks) => ({
              ...currTasks,
              [doctorId]: tasks.map(mapApiTaskFields),
            })),
          (error) => console.error(error)
        );
    }
    // Update selected doctors state
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
          <DoctorListTitle loading={!doctors}>Doctors</DoctorListTitle>
          <DoctorList
            doctors={doctors || []}
            loading={!doctors}
            onDoctorClick={onDoctorSelect}
            selectedDoctorIds={selectedDoctors}
          />
        </DoctorListContainer>

        <TaskView>
          {selectedDoctors.map((doctorId) => (
            <TaskListContainer key={`App_taskList${doctorId}`}>
              <TaskList
                loading={!tasks[doctorId]}
                tasks={tasks[doctorId] || []}
                title={formatDoctorName(
                  doctors!.find((doc) => doc.id === doctorId)!
                )}
              />
            </TaskListContainer>
          ))}
        </TaskView>
      </Content>
    </>
  );
};

const Content = styled.div`
  background-color: ${theme.color.springWood};
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - ${theme.layout.headerHeight});
  width: 100%;
`;

const DoctorListContainer = styled.div`
  border-right: 1px solid ${theme.color.casper};
  box-sizing: border-box;
  max-height: calc(100vh - ${theme.layout.headerHeight});
  overflow-y: scroll;
  padding: ${theme.space.m};
  width: ${theme.layout.minMobileWidth};
`;
const DoctorListTitle = styled.h3<{ loading?: boolean }>`
  margin-bottom: ${({ loading }) => (loading ? theme.space.xl : theme.space.m)};
  padding-left: ${theme.space.s};
`;

const TaskListContainer = styled.div`
  background-color: white;
  margin-right: ${theme.space.m};
`;
const TaskView = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow: scroll;
  padding: ${theme.space.m};
  width: 100%;
`;

export { App };

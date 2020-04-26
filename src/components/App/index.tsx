import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';

import { Header } from 'components/Header';
import { theme } from 'styles/theme';

/** Entryway to app */
const App: FC = () => {
  const [taskLists] = useState([1, 2, 3]);

  return (
    <>
      <Header />
      <Content>
        <DoctorList>i'm a list of doctors!</DoctorList>
        <TaskView>
          {taskLists.map((taskList) => (
            <TaskList>task list {taskList}</TaskList>
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
  padding: ${theme.space.m};
  width: 100%;
`;

const DoctorList = styled.div`
  width: ${theme.layout.minMobileWidth};
`;

const TaskList = styled.div`
  width: ${theme.layout.minMobileWidth};
`;
const TaskView = styled.div`
  display: flex;
  width: 100%;
`;

export { App };

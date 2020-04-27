import {
  CircularProgress,
  ExpansionPanel,
  ExpansionPanelSummary,
  FormControlLabel,
  Checkbox,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import capitalize from 'lodash/capitalize';
import sortBy from 'lodash/sortBy';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { TDoctorTask } from 'types/doctor';

interface Props {
  loading?: boolean;
  tasks: TDoctorTask[];
  title?: string;
}

/** List of tasks displayed by desc. priority (priority 5 appears above priority 4) */
const TaskList: FC<Props> = ({ loading, tasks, title }) => {
  return (
    <Styles>
      <Title>{title}</Title>

      {loading ? (
        <LoadingContainer>
          <CircularProgressStyled />
        </LoadingContainer>
      ) : (
        sortBy(tasks, 'priority')
          .reverse()
          .map(({ priority, taskId }) => (
            <ExpansionPanelStyled elevation={0} key={`TaskList_task${taskId}`}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <FormControlLabel
                  control={<CheckboxStyled />}
                  label={capitalize(taskId)}
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography color="textSecondary">
                  Priority {priority}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanelStyled>
          ))
      )}
    </Styles>
  );
};

const CheckboxStyled = styled(Checkbox)`
  &&& {
    color: ${theme.color.brightSun};
    &:hover {
      background-color: ${theme.color.apricot}40;
    }
  }
`;

const CircularProgressStyled = styled(CircularProgress)`
  &&& {
    color: ${theme.color.apricot};
  }
`;

const ExpansionPanelStyled = styled(ExpansionPanel)`
  &&& {
    border-top: 1px solid ${theme.color.casper}40;
    * {
      font-family: ${theme.font.family.body};
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.space.m};
`;

const Styles = styled.div`
  background-color: white;
  border-radius: ${theme.space.xs};
  height: fit-content;
  min-width: ${theme.layout.minMobileWidth};
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 0;
  padding: ${theme.space.m};
  text-align: center;
`;

export { TaskList };

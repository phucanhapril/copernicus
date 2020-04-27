import { addDecorator } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/macro';

import { GlobalStyle } from 'styles/global';

addDecorator((storyFn) => (
  <StoryContainer>
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Work+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap"
      rel="stylesheet"
    />
    <GlobalStyle />

    {storyFn()}
  </StoryContainer>
));

const StoryContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

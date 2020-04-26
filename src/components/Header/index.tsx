import React, { FC } from 'react';
import styled from 'styled-components/macro';

import { theme } from 'styles/theme';

/** Header containing app title */
const Header: FC = () => {
  return (
    <Styles>
      <Title>
        Copern
        <TitleI>
          i
          <TitleIDot />
        </TitleI>
        cus
      </Title>
    </Styles>
  );
};

const Styles = styled.div`
  background-color: ${theme.color.haiti};
  color: white;
  cursor: default;
  height: ${theme.layout.headerHeight};
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  padding: ${theme.space.m} 0;
`;

const TitleI = styled.span`
  position: relative;
`;
const TitleIDot = styled.div`
  background-color: ${theme.color.brightSun};
  border-radius: 50%;
  display: inline-block;
  height: 0.4rem;
  left: 2px;
  position: absolute;
  top: 3px;
  width: 0.4rem;
`;

export { Header };

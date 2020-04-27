import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface Props {
  ariaLabel: string;
  emoji: string;
  message: ReactNode;
}

/** Cute emoji with message for empty statuses */
const Empty: FC<Props> = ({ ariaLabel, emoji, message }) => {
  return (
    <Styles>
      <span aria-label={ariaLabel} role="img">
        {emoji}
      </span>
      <Message>{message}</Message>
    </Styles>
  );
};

const Styles = styled.div`
  font-size: ${theme.font.size.huge};
  padding: ${theme.space.xl} 0;
  text-align: center;
`;

const Message = styled.div`
  font-size: ${theme.font.size.s};
  * {
    font-size: ${theme.font.size.s};
  }
`;

export { Empty };

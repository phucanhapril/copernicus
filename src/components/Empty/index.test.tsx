import { render, getByText } from '@testing-library/react';
import React from 'react';
import { Empty } from '.';

describe('Empty', () => {
  it('renders without crashing', () => {
    render(<Empty ariaLabel="hello-mouse" emoji="🐁" message="Hello" />);
  });

  it('renders emoji with label', () => {
    const test = render(
      <Empty ariaLabel="hello-mouse" emoji="🐁" message="Hello" />
    );
    const emojiSpan = test.getByLabelText('hello-mouse');
    expect(emojiSpan).toBeTruthy();
    expect(getByText(emojiSpan, '🐁')).toBeTruthy();
  });

  it('renders message', () => {
    const test = render(
      <Empty ariaLabel="hello-mouse" emoji="🐁" message="Hello" />
    );
    expect(test.getByText('Hello')).toBeTruthy();
  });
});

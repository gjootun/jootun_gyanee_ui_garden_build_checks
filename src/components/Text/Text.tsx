import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

// Styled <p> paragraph: grey text and not-allowed cursor when disabled
const StyledText = styled.p<{ $color: string; $disabled: boolean }>`
  color: ${({ $color, $disabled }) => ($disabled ? '#999999' : $color)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  font-size: 1rem;
  line-height: 1.5;

  /* responsive: slightly smaller text on small screens */
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  color = '#222222', // default colour
  disabled = false, // default state is enabled
}) => (
  <StyledText $color={color} $disabled={disabled}>
    {text}
  </StyledText>
);

export default Text;

import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

// Styled <label>: grey text and not-allowed cursor when disabled
const StyledLabel = styled.label<{ $color: string; $disabled: boolean }>`
  color: ${({ $color, $disabled }) => ($disabled ? '#999999' : $color)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  font-size: 1rem;

  /* responsive: slightly smaller text on small screens */
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  color = '#222222', // default colour
  disabled = false, // default state is enabled
}) => (
  <StyledLabel htmlFor={htmlFor} $color={color} $disabled={disabled}>
    {text}
  </StyledLabel>
);

export default Label;

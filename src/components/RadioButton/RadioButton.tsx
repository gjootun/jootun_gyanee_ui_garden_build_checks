import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

// Wrapper <label> holds the circle and the text; it gets the background colour
const Wrapper = styled.label<{ $bg: string; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#222222')};
  /* the cursor shows the user can not click */
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;

  /* responsive: slightly smaller text on small screens */
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

// The actual radio circle uses the same cursor as the wrapper
const Input = styled.input`
  cursor: inherit;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  backgroundColor = '#ffffff', // default colour
  disabled = false, // default state is enabled
  onChange,
}) => (
  <Wrapper
    $bg={backgroundColor}
    $disabled={disabled}
    data-testid="radio-wrapper"
  >
    <Input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {label}
  </Wrapper>
);

export default RadioButton;

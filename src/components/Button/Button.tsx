import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// styled-components: CSS written inside the component.
// "$bg" starts with $ so it is NOT passed down to the real HTML element.
const StyledButton = styled.button<{ $bg: string }>`
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, disabled }) => (disabled ? '#cccccc' : $bg)};
  color: ${({ disabled }) => (disabled ? '#666666' : '#ffffff')};
  /* the cursor shows the user can not click */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;

  /* responsive: full-width button on small screens */
  @media (max-width: 600px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = '#0066cc', // default colour
  disabled = false, // default state is enabled
  onClick,
}) => (
  <StyledButton $bg={backgroundColor} disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;

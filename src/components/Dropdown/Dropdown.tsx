import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

// Styled <select> (the dropdown box)
const StyledSelect = styled.select<{ $bg: string }>`
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, disabled }) => (disabled ? '#cccccc' : $bg)};
  color: ${({ disabled }) => (disabled ? '#666666' : '#222222')};
  /* the cursor shows the user can not click */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #999999;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;

  /* responsive: full width on small screens */
  @media (max-width: 600px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  backgroundColor = '#ffffff', // default colour
  disabled = false, // default state is enabled
  onChange,
}) => (
  <StyledSelect
    $bg={backgroundColor}
    disabled={disabled}
    onChange={(e) => onChange && onChange(e.target.value)}
    data-testid="dropdown" /* lets the tests find this element */
  >
    {/* one <option> for each item in the options list */}
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;

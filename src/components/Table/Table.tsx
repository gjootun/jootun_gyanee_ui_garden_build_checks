import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

// Scroll wrapper: wide tables scroll sideways on small screens (responsive)
const Scroll = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table<{ $bg: string; $disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#222222')};
  /* the cursor shows the user can not click */
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  /* responsive: smaller text on small screens */
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  backgroundColor = '#ffffff', // default colour
  disabled = false, // default state is enabled
}) => (
  <Scroll>
    <StyledTable $bg={backgroundColor} $disabled={disabled} data-testid="table">
      {children}
    </StyledTable>
  </Scroll>
);

export default Table;

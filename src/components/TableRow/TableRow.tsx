import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

// <tr> row: grey when disabled
const StyledRow = styled.tr<{ $bg: string; $disabled: boolean }>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : 'inherit')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor = 'transparent', // default: no colour
  disabled = false, // default state is enabled
}) => (
  <StyledRow $bg={backgroundColor} $disabled={disabled} data-testid="table-row">
    {children}
  </StyledRow>
);

export default TableRow;

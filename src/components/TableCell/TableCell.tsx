import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

// Normal data cell (<td>)
const StyledTd = styled.td<{ $bg: string; $disabled: boolean }>`
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #dddddd;
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : 'inherit')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  /* responsive: less padding on small screens */
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

// Header cell (<th>): same look, different HTML tag
const StyledTh = styled.th<{ $bg: string; $disabled: boolean }>`
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #dddddd;
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : 'inherit')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  header = false, // default: normal <td> cell
  colSpan,
  backgroundColor = 'transparent', // default: no colour
  disabled = false, // default state is enabled
}) =>
  // choose <th> or <td> depending on the "header" prop
  header ? (
    <StyledTh
      $bg={backgroundColor}
      $disabled={disabled}
      colSpan={colSpan}
      data-testid="table-cell"
    >
      {children}
    </StyledTh>
  ) : (
    <StyledTd
      $bg={backgroundColor}
      $disabled={disabled}
      colSpan={colSpan}
      data-testid="table-cell"
    >
      {children}
    </StyledTd>
  );

export default TableCell;

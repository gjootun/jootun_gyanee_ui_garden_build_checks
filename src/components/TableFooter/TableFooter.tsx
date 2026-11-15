import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

// <tfoot> with a light background and bold text
const StyledFoot = styled.tfoot<{ $bg: string; $disabled: boolean }>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : 'inherit')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  font-weight: bold;
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor = '#eeeeee', // default colour
  disabled = false, // default state is enabled
}) => (
  <StyledFoot
    $bg={backgroundColor}
    $disabled={disabled}
    data-testid="table-footer"
  >
    {children}
  </StyledFoot>
);

export default TableFooter;

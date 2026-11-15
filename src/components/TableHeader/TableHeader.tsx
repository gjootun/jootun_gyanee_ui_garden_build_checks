import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

// <thead> with a coloured background and white bold text
const StyledHead = styled.thead<{ $bg: string; $disabled: boolean }>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#ffffff')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  font-weight: bold;
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor = '#0066cc', // default colour
  disabled = false, // default state is enabled
}) => (
  <StyledHead
    $bg={backgroundColor}
    $disabled={disabled}
    data-testid="table-header"
  >
    {children}
  </StyledHead>
);

export default TableHeader;

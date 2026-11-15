import React from 'react';

// Props (settings) that the TableCell accepts
export interface TableCellProps {
  children?: React.ReactNode; // the content of the cell
  header?: boolean; // true = header cell (<th>), false = normal cell (<td>)
  colSpan?: number; // how many columns the cell stretches across
  backgroundColor?: string;
  disabled?: boolean;
}

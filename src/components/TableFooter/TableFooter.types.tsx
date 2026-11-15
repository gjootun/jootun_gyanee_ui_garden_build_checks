import React from 'react';

// Props (settings) that the TableFooter (<tfoot>) accepts
export interface TableFooterProps {
  children?: React.ReactNode; // usually a TableRow
  backgroundColor?: string;
  disabled?: boolean;
}

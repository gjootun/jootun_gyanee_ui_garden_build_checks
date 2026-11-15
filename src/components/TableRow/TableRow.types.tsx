import React from 'react';

// Props (settings) that the TableRow (<tr>) accepts
export interface TableRowProps {
  children?: React.ReactNode; // the cells inside the row
  backgroundColor?: string;
  disabled?: boolean;
}

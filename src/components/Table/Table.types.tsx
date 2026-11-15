import React from 'react';

// Props (settings) that the Table accepts
export interface TableProps {
  children?: React.ReactNode; // the parts inside: header, rows, footer
  backgroundColor?: string; // colour of the table
  disabled?: boolean; // greyed out when true
}

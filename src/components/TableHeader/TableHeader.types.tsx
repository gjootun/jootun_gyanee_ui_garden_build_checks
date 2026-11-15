import React from 'react';

// Props (settings) that the TableHeader (<thead>) accepts
export interface TableHeaderProps {
  children?: React.ReactNode; // usually a TableRow of header cells
  backgroundColor?: string;
  disabled?: boolean;
}

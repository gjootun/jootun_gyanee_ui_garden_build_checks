import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHeader from './TableHeader';

// Render inside a real <table> so the HTML structure is valid
const wrap = (ui: React.ReactElement) => render(<table>{ui}</table>);

describe('TableHeader', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    wrap(
      <TableHeader>
        <tr>
          <th>Name</th>
        </tr>
      </TableHeader>,
    );
    expect(screen.getByTestId('table-header')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    wrap(
      <TableHeader backgroundColor="#0066cc" disabled>
        <tr>
          <th>Name</th>
        </tr>
      </TableHeader>,
    );
    expect(screen.getByTestId('table-header')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});

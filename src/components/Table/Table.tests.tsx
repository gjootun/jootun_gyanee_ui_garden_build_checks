import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>,
    );
    expect(screen.getByTestId('table')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(
      <Table backgroundColor="#ffffff" disabled>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>,
    );
    expect(screen.getByTestId('table')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});

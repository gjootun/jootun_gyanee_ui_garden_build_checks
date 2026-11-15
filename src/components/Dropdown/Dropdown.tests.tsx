import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

// Sample choices used by the tests
const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

describe('Dropdown', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByTestId('dropdown')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(<Dropdown options={options} backgroundColor="#ffffff" disabled />);
    expect(screen.getByTestId('dropdown')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});

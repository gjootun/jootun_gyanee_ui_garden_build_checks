import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(<Button label="Click me" backgroundColor="#0066cc" disabled />);
    expect(screen.getByText('Click me')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});

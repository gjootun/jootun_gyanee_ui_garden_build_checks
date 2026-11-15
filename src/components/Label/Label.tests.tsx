import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<Label text="Name" />);
    expect(screen.getByText('Name')).toBeVisible();
  });

  // Test 2: the colour changes (greyed out) when disabled
  test('color changes when disabled', () => {
    render(<Label text="Name" color="#222222" disabled />);
    expect(screen.getByText('Name')).toHaveStyle('color: #999999');
  });
});

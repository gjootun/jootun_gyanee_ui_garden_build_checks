import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<Text text="Hello" />);
    expect(screen.getByText('Hello')).toBeVisible();
  });

  // Test 2: the colour changes (greyed out) when disabled
  test('color changes when disabled', () => {
    render(<Text text="Hello" color="#222222" disabled />);
    expect(screen.getByText('Hello')).toHaveStyle('color: #999999');
  });
});

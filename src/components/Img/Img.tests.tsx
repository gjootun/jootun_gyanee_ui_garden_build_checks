import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<Img src="test.png" alt="Sample" />);
    expect(screen.getByAltText('Sample')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(
      <Img src="test.png" alt="Sample" backgroundColor="#ffffff" disabled />,
    );
    expect(screen.getByAltText('Sample')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});

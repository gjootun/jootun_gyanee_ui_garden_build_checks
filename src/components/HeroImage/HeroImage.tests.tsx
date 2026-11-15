import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<HeroImage imageUrl="test.png" title="Welcome" />);
    expect(screen.getByText('Welcome')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(
      <HeroImage
        imageUrl="test.png"
        title="Welcome"
        backgroundColor="#333333"
        disabled
      />,
    );
    expect(screen.getByTestId('hero')).toHaveStyle('background-color: #cccccc');
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<RadioButton label="Choice 1" name="g" />);
    expect(screen.getByText('Choice 1')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(
      <RadioButton
        label="Choice 1"
        name="g"
        backgroundColor="#ffffff"
        disabled
      />,
    );
    expect(screen.getByTestId('radio-wrapper')).toHaveStyle(
      'background-color: #cccccc',
    );
  });
});

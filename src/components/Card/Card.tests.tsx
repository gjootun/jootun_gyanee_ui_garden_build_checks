import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card', () => {
  // Test 1: the component is visible
  test('is visible', () => {
    render(<Card title="Card title" content="Body" />);
    expect(screen.getByText('Card title')).toBeVisible();
  });

  // Test 2: background colour changes in the disabled state
  test('background color changes when disabled', () => {
    render(
      <Card
        title="Card title"
        content="Body"
        backgroundColor="#ffffff"
        disabled
      />,
    );
    expect(screen.getByTestId('card')).toHaveStyle('background-color: #cccccc');
  });
});

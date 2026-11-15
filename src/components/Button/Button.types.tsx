//settings that the Button accepts
export interface ButtonProps {
  label: string; // text shown on the button
  backgroundColor?: string; // optional colour (changeable in Storybook controls)
  disabled?: boolean; // true = greyed out and not clickable
  onClick?: () => void; // function to run when the button is clicked
}

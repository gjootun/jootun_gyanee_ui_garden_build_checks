// Props (settings) that the RadioButton accepts
export interface RadioButtonProps {
  label: string; // text next to the radio circle
  name: string; // radio buttons with the same name form one group
  value?: string; // value of this choice
  checked?: boolean; // is it selected?
  backgroundColor?: string; // colour behind the radio button
  disabled?: boolean; // greyed out when true
  onChange?: () => void; // runs when the user selects it
}

// One choice inside the dropdown
export interface DropdownOption {
  value: string; // value used by the code
  label: string; // text the user sees
}

// Props (settings) that the Dropdown accepts
export interface DropdownProps {
  options: DropdownOption[]; // list of choices
  backgroundColor?: string; // colour of the dropdown box
  disabled?: boolean; // greyed out when true
  onChange?: (value: string) => void; // called with the chosen value
}

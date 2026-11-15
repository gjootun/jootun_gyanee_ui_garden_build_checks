// Props (settings) that the Label accepts
export interface LabelProps {
  text: string; // the label text
  htmlFor?: string; // id of the form field this label belongs to
  color?: string; // text colour
  disabled?: boolean; // greyed out when true
}

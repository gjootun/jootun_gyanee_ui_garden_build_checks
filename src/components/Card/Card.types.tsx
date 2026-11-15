// Props (settings) that the Card accepts
export interface CardProps {
  title: string; // heading of the card
  content: string; // text inside the card
  imageUrl?: string; // optional picture at the top
  backgroundColor?: string; // colour of the card
  disabled?: boolean; // greyed out when true
}

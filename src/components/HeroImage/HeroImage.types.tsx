// Props (settings) that the HeroImage (big banner with a title) accepts
export interface HeroImageProps {
  imageUrl: string; // banner picture
  title: string; // text shown over the picture
  backgroundColor?: string; // colour behind the picture
  disabled?: boolean; // greyed out when true
}

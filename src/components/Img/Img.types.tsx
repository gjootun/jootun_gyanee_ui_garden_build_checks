// Props (settings) that the Img component accepts
export interface ImgProps {
  src: string; // image address
  alt: string; // description for screen readers
  width?: string; // e.g. '300px'
  backgroundColor?: string; // colour behind the image
  disabled?: boolean; // greyed out when true
}

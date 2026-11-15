import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

// Styled <img>. Disabled = grey background, faded and black-and-white.
const StyledImg = styled.img<{
  $bg: string;
  $width: string;
  $disabled: boolean;
}>`
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  width: ${({ $width }) => $width};
  /* responsive: never wider than its container */
  max-width: 100%;
  height: auto;
  /* the cursor shows the user can not click */
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  /* faded and black-and-white when disabled */
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(1)' : 'none')};
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width = '300px', // default width
  backgroundColor = '#ffffff', // default colour
  disabled = false, // default state is enabled
}) => (
  <StyledImg
    src={src}
    alt={alt}
    $width={width}
    $bg={backgroundColor}
    $disabled={disabled}
  />
);

export default Img;

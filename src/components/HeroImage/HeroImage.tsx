import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

// The banner: a div with a background image
const Hero = styled.div<{ $url: string; $bg: string; $disabled: boolean }>`
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  /* black-and-white and faded when disabled */
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(1)' : 'none')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  /* the cursor shows the user can not click */
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  /* centre the title in the banner */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;

  /* responsive: shorter banner on small screens */
  @media (max-width: 600px) {
    height: 200px;
  }
`;

// Title text shown over the image
const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 0 1rem;

  /* responsive: smaller title on small screens */
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  backgroundColor = '#333333', // default colour
  disabled = false, // default state is enabled
}) => (
  <Hero
    $url={imageUrl}
    $bg={backgroundColor}
    $disabled={disabled}
    data-testid="hero"
  >
    <Title>{title}</Title>
  </Hero>
);

export default HeroImage;

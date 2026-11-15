import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

// The outer box of the card
const Wrapper = styled.div<{ $bg: string; $disabled: boolean }>`
  /* grey when disabled, otherwise the chosen colour */
  background-color: ${({ $bg, $disabled }) => ($disabled ? '#cccccc' : $bg)};
  color: ${({ $disabled }) => ($disabled ? '#666666' : '#222222')};
  /* the cursor shows the user can not click */
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  border: 1px solid #dddddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 350px;

  /* responsive: full width on small screens */
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

// Optional picture at the top of the card
const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

// Padding around the text
const Body = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Content = styled.p`
  margin: 0;
`;

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  backgroundColor = '#ffffff', // default colour
  disabled = false, // default state is enabled
}) => (
  <Wrapper $bg={backgroundColor} $disabled={disabled} data-testid="card">
    {/* only show the image when an imageUrl was given */}
    {imageUrl && <CardImage src={imageUrl} alt={title} />}
    <Body>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Body>
  </Wrapper>
);

export default Card;

import React from "react";
import styled from "styled-components";

import SlideInBottom from '../../animations/SlideInBottom';

const Container = styled.div`
  width: 450px;
  min-height: 600px;
  margin: 30px;
  padding: 50px;
  background: ${({ theme }) => theme.secondary};
  border: ${({ theme }) => theme.text} 2px solid;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  @media only screen and (max-width: 375px) {
    min-width: 170px;
  }
`;

const Title = styled.h1`
  animation: ${SlideInBottom} 1s forwards;
  color: ${({ theme }) => theme.text};
  font-size: 3rem;
  line-height: 22px;
  margin: 30px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 2rem;
  letter-spacing: 1.4px;
  text-align: center;
`;

const Card = ({ icon, title, text }) => {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default Card;

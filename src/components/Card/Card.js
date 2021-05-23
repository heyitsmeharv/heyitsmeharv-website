import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  @media only screen and (max-width: 375px) {
    min-width: 170px;
  }
`;

const Icon = styled.div`
  margin: 10px;
  svg {
    color: ${({ theme }) => theme.accent};
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin-top: 0;
  line-height: 22px;
  margin-bottom: 20px;
`;

const Card = ({ icon, title }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;

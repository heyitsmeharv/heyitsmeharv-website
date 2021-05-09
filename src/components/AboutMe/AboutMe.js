import React from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 2rem;
  letter-spacing: 1.4px;
  margin: 1rem 4rem;
  margin-top: 30px;
`;

const Seporator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.accent};
`;

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Seporator />
      <Text>
        I'm a self taught programmer with multiple years of experience delivering commercialised web applications built in React.js.
        I have an adventurous and inquisitive nature when it comes to technologies with a particular interest in cloud computing. I'm
        qualified in Amazon's cloud based computing platform (AWS).
      </Text>
    </Container>
  )
}

export default AboutMe;
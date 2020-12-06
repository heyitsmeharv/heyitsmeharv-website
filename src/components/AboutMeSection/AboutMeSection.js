import React from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";


const StyledSection = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: ${({ theme }) => theme.background};
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0rem 4rem;
  /* animation: ${SlideInBottom} 0.5s forwards; */
`;

const Text = styled.p`
  font-size: 2rem;
  letter-spacing: 1.4px;
  margin: 1rem 4rem;
  /* animation: ${SlideInBottom} 0.5s forwards; */
`;

const AboutMeSection = () => {
  return (
    <StyledSection>
      <Title>About Me</Title>
      <Text>
        I'm a self taught programmer with multiple years of experience delivering commercialised web applications built in React.js.
        I have an adventurous and inquisitive nature when it comes to technologies with a particular interest in cloud computing. I'm
        qualified in Amazon's cloud based computing platform (AWS).
      </Text>
    </StyledSection>
  )
}

export default AboutMeSection;
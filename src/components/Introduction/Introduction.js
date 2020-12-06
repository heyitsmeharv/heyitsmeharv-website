import React from "react";
import styled from "styled-components";

// components
import { Container } from "../Container/Container"
import { ContactMeButton, SeeMoreButton } from "../Button/Button";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// helpers
import { size } from "../../helpers/breakpoints";

// images
import ProfileImg from "../../resources/images/profile-portrait.jpg";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 5%;
// `;

const IntroWrapper = styled.div`
  animation: ${SlideInBottom} 0.5s forwards;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 30%;
  margin: 0 4rem;
`;

const Intro = styled.h1`
  color: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  border-radius: 35px;
  font-size: 5rem;
  line-height: 1.5;
  letter-spacing: 3.2px;
  width: 100%;
`;

const Introduction = () => {
  return (
    <Container className='flex' justify='column' align='center'>
      <ProfileImage src={ProfileImg} />
      <IntroWrapper>
        <Intro>
          Hello, my name is Adam. I'm a software engineer from Oxford,
          England.
        </Intro>
        <ButtonWrapper>
          <ContactMeButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Contact Me
        </ContactMeButton>
          <SeeMoreButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            See More
        </SeeMoreButton>
        </ButtonWrapper>
      </IntroWrapper>
    </Container>
  );
};

export default Introduction;

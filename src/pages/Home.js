import React from "react";
import styled, { css } from "styled-components";

// components
import { ContactMeButton, SeeMoreButton } from "../components/Button/Button";
import Header from "../components/Header/Header";
import SocialMedia from "../components/SocialMedia/SocialMedia";

// animations
import SlideInBottom from "../animations/SlideInBottom";

// helpers
import { size } from "../resources/styles/breakpoints";

// images
import ProfileImg from "../resources/images/profile-portrait.jpg";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

const IntroWrapper = styled.div`
  animation: ${SlideInBottom} 0.5s forwards;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 20%;
`;

const Intro = styled.h1`
  color: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4rem;
  padding: 0 5rem;
  height: fit-content;
  border-radius: 35px;
  font-size: 5rem;
  line-height: 1.5;
`;

const AboutSection = styled.div`
  animation: ${SlideInBottom} 0.5s forwards;
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 50vh;
  margin-top: 10%;
`;

const AboutTitle = styled.h1`
  font-size: 10rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const AboutParagraph = styled.section`
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 3rem;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <ProfileImage src={ProfileImg} />
        <IntroWrapper>
          <Intro>
            Hello, my name is Adam. I'm a software developer from Oxford,
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
        {/* <SocialMedia /> */}
      </Wrapper>
      <AboutSection>
        <AboutTitle>About Me</AboutTitle>
        <AboutParagraph>I started my journey</AboutParagraph>
      </AboutSection>
    </Container>
  );
};

export default Home;

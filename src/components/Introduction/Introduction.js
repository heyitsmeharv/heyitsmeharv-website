import React, { useState } from "react";
import styled from "styled-components";

// components
// import { Container } from "../Container/Container"
import { ContactMeButton, DownloadCVButton } from "../Button/Button";
import ContactMe from "../ContactMe/ContactMe";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// images
import ProfileImg from "../../resources/images/profile-portrait.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

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
  border: 6px solid ${({ theme }) => theme.background};
  border-radius: 50%;
  width: 30rem;
  margin: 0 4rem;
  @media only screen and (max-width: 600px) {
    width: 30rem;
  }
`;

const Intro = styled.h1`
  color: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
  display: flex;
  align-items: center;
  height: fit-content;
  border-radius: 35px;
  font-size: 4rem;
  line-height: 1.5;
  letter-spacing: 3.2px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 5%;
  }
`;

const Introduction = ({ open, setOpen }) => {
  return (
    <Container>
      <ProfileImage src={ProfileImg} />
      <IntroWrapper>
        <Intro>
          Hello 👋, my name is Adam. I'm a software engineer from Oxford, England.
        </Intro>
        <ButtonWrapper>
          <ContactMeButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
          >
            Contact Me
          </ContactMeButton>
          <a target="_blank"
            href="https://heyitsmeharv.s3.eu-west-2.amazonaws.com/Adam+Harvey+-+CV.pdf"
          >
            <DownloadCVButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Curriculum Vitae
          </DownloadCVButton>
          </a>
        </ButtonWrapper>
      </IntroWrapper>
    </Container>
  );
};

export default Introduction;

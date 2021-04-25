import React from 'react';
import styled from 'styled-components';

// animations
import SlideInBottom from "../../animations/SlideInBottom";

const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.contactMeBackground};
  max-height: ${props => props.open ? "100%" : "0"};
  overflow: hidden;
  padding: ${props => props.open ? "2rem 0;" : "0"};
  transition: all 0.3s ease-out;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0rem 4rem;
  /* animation: ${SlideInBottom} 0.5s forwards; */
`;

const Input = styled.input`
`;

const ContactMe = ({ open }) => {
  return (
    <Container open={open}>
      <Title>Contact Me</Title>
      <Input></Input>
    </Container>
  )
}

export default ContactMe;
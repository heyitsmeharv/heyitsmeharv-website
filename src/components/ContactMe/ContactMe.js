import React from 'react';
import styled from 'styled-components';

// animations
import SlideInBottom from "../../animations/SlideInBottom";

const Container = styled.section`
  width: 100%;
  padding: 
  background: ${({ theme }) => theme.contactMeBackground};
  max-height: ${props => props.open ? "100%" : "0"};
  overflow: hidden;
  padding: ${props => props.open ? "2rem 0;" : "0"};
  transition: all 0.3s ease-out;
`;

const Input = styled.input`
`;

const ContactMe = () => {
  return (
    <Container>
      <Input></Input>
    </Container>
  )
}

export default ContactMe;
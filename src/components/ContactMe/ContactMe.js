import React from 'react';
import styled from 'styled-components';

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// components
import { Input, TextArea } from "../Input/Input";
import { ContactMeSendButton } from "../Button/Button";

const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.secondary};
  max-height: ${props => props.open ? "100%" : "0"};
  padding: ${props => props.open ? "4rem 0;" : "0"};
  transition: all 0.3s ease-out;
  overflow: hidden;
  margin-bottom: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
  line-height: 25px;
`;

const Seporator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: auto;
  background-color: ${({ theme }) => theme.accent};
`;

const ContactMe = ({ open }) => {
  return (
    <Container open={open}>
      <Title>Contact Me</Title>
      <Seporator />
      <Text>Contact me for more information on my own work experiences and services and any business enquiries.</Text>
      <FlexWrapper>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
      </FlexWrapper>
      <FlexWrapper>
        <Input type="text" placeholder="Company" />
        <Input type="text" placeholder="Telephone" />
      </FlexWrapper>
      <FlexWrapper>
        <TextArea type="text" placeholder="Message" />
      </FlexWrapper>
      <FlexWrapper>
        <ContactMeSendButton>Send Message</ContactMeSendButton>
      </FlexWrapper>

    </Container>
  )
}

export default ContactMe;
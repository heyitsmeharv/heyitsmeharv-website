import React, { useState, useEffect } from "react";
import styled from "styled-components";

import hdate from 'human-date';

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
  text-align: center;
  font-weight: 600;
`;

const Separator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.separator};
`;

const AboutMe = () => {
  const [age, setAge] = useState(hdate.relativeTime(new Date("09-27-1993".replace(/-/g, "/")), { returnObject: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(hdate.relativeTime(new Date("09-27-1993".replace(/-/g, "/")), { returnObject: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>About Me</Title>
      <Separator />
      <Text>
        I'm a self taught programmer with multiple years of experience delivering commercialised web applications built in React.js.
        I have an adventurous and inquisitive nature when it comes to technologies with a particular interest in cloud computing. I'm
        qualified in Amazon's cloud based computing platform (AWS).
      </Text>
      <Text>I've been alive for {age.years} years, {age.days} days, {age.hours} hours, {age.minutes} minutes and {age.seconds} seconds and counting..</Text>
    </Container>
  )
}

export default AboutMe;
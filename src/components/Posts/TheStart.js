import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Wrapper = styled.div`
  padding: 1rem 25%;
  line-height: 6.5rem;
  
  @media only screen and (max-width: 1000px) {
    line-height: 5rem;
    padding: 0;
  }

  @media only screen and (min-width: 1001px) and (max-width: 1800px) {
    line-height: 6.5rem;
    padding: 1rem 20%;
  }
`;

const Container = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const Spacer = styled.br``

const TheStart = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/the-start');
    }
  }, []);

  return (
    <Wrapper>
      <StyledNavButton>
        <StyledNavLink
          exact to={`/blog`}>
          <StyledBackIcon />
        </StyledNavLink>
      </StyledNavButton>
      <Container>
        <Title>The Start</Title>
        <Spacer />
        <Text>
          For a long time I've wanted to write a blog about technologies I'm interested in.
          The purpose of this blog is just to document my personal journey learning cool tech,
          if only to cement my own understanding and potentially help people with similar interests.
          I'm hoping by the end of the year I will have got the hang of blogging with more than a handful
          of blog posts created. I'm hoping to have blogged about the following:
          <Spacer />
          <Spacer />
          <li>Making cool software</li>
          <li>Exploring using new technologies</li>
          <li>Create Tutorials</li>
          <li>Solidifying my own understanding</li>
          <li>Following conferences and events</li>
          <Spacer />
          I don't have a list of blog posts I want to write about, but I'm hoping that now I have created a space for
          myself to blog, I'll be more inclined to write... Watch this space!
        </Text>
      </Container>
    </Wrapper>
  );
}

export default TheStart;
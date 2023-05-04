import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import ObjectExplorer from "../ObjectExplorer/ObjectExplorer";

// codeblocks
import { example, mapExample, mapExample2, forLoop, forEachExample, filterExample, findExample, findExample2, everyExample, someExample, reduceExample } from "../../helpers/codeblocks";

// images
import JavaScriptObject from "../../resources/images/blog/JavaScriptObject.png";

const Wrapper = styled.div`
  padding: 1rem 4rem;
  line-height: 6.5rem;
  
  @media only screen and (max-width: 500px) {
     line-height: 5rem;
     padding: 0;
  }
`;

const Container = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const CodeBlock = styled.pre`
  font-family: 'monospace';
  font-size: 2rem;
  background: #292929;
  color: ${({ theme }) => theme.buttonText};
  word-wrap: break-word;
  padding: 1rem 2rem 1rem;
  border-radius: 2rem;
  overflow-x: auto;
  line-height: 3.5rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const BoldText = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: bold;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.text};
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

const StyledAnchorText = styled.span`
  color: ${({ theme }) => theme.text};
  font-style: italic;
  font-weight: bold;
`;

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const StyledImage = styled.img`
  width: 50%;
`;

const Spacer = styled.br``

const JavaScriptArray = () => {

  // analytics
  useEffect(() => {
    ReactGA.pageview('/blog/javascript-objects');
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
        <Title>JavaScript Objects</Title>
        <Spacer />
        <Text>
          After writing a blog post about arrays, which you can find here 👉 <StyledAnchorText><StyledNavLink exact to={`/blog/javascript-arrays`}>JavaScript Arrays</StyledNavLink></StyledAnchorText>. Naturally it feels like the next post needs to be about JavaScript Objects, so
          in this post I'll aim to try and explain what objects are, why they're needed and how you can use them. Simple enough? Let's get it.
          <Spacer />
          <Spacer />
          <SubTitle>What is an Object?</SubTitle>
          <Spacer />
          <Spacer />
          <SubTitle>The anatomy of an Object</SubTitle>
          <StyledImage src={JavaScriptObject} />
          <SubTitle id='use-case'>Use Cases</SubTitle>
          I have an object, I would like to...
          <ObjectExplorer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default JavaScriptArray;
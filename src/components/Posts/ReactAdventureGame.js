import ReactGA from 'react-ga';
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { JavascriptSVG, ReactjsSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink, CopyButton } from '../Button/Button';

// codeblocks

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

const Flex = styled.div`
  display: flex;
  align-items: baseline;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const CodeBlock = styled.pre`
  font-family: 'Calibri';
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

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: 25px;

  @media only screen and (max-width: 1000px) {
    width: 36px;
    height: 36px;
  }
`;

const Spacer = styled.br``

const ReactAdventureGame = () => {
  const [isCopied, setIsCopied] = useState([
    { value: false }
  ]);

  // analytics
  useEffect(() => {
    ReactGA.pageview('/blog/react-text-based-adventure');
  }, []);

  const handleCopy = (code, key) => {
    const isCopiedDefault = [
      { value: false }
    ];
    navigator.clipboard.writeText(code);

    const newIsCopied = [...isCopied];
    newIsCopied[key].value = true;
    setIsCopied(newIsCopied);

    setTimeout(() => setIsCopied(isCopiedDefault), 1500);
  };

  return (
    <Wrapper>
      <StyledNavButton>
        <StyledNavLink
          exact to={`/blog`}>
          <StyledBackIcon />
        </StyledNavLink>
      </StyledNavButton>
      <Container>
        <Flex>
          <Title>React.js Text Based Adventure Game</Title>
          <IconWrapper>
            <Icon><ReactjsSVG /></Icon>
            <Icon><JavascriptSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          I've been contemplating on whether or not to do a separate blog post to explain what the React.js framework is but I want to move away from my last posts and get stuck in with building something!
          If you're completely new to React I would recommend having a gander at their  <StyledAnchor href="https://react.dev/" target="_blank">documentation</StyledAnchor> which is pretty good. That being said, I will be taking a 'hand holdy'
          approach so feel free to follow along even if you're a complete beginner!
          <Spacer />
          I'll break this down into sections:
          <StyledAnchor href="#project-setup"><StyledListItem>Project Setup</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id='project-setup'>Project Setup</SubTitle>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default ReactAdventureGame;
import ReactGA from 'react-ga';
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import JSIcon from '../../resources/images/blog/JS.png';

// components
import { StyledNavButton, StyledNavLink, CopyButton } from '../Button/Button';
import ObjectExplorer from "../ObjectExplorer/ObjectExplorer";

// codeblocks
import { objects, objectNotations, objectNotationsTwo } from "../../helpers/codeblocks";

// images
import JavaScriptObject from "../../resources/images/blog/JavaScriptObject.png";

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

const Flex = styled.div`
  display: flex;
  align-items: baseline;
`;

const Container = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
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

const SubSubTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const HighlightBackground = styled.span`
  background: ${({ theme }) => theme.secondary};
  padding: 0 5px;
  margin: 0 5px;
  font-weight: bold;
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
  width: 100%;
`;

const StyledTag = styled.img`
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

const JavaScriptArray = () => {
  const [isCopied, setIsCopied] = useState([
    { value: false },
    { value: false },
    { value: false }
  ]);

  // analytics
  useEffect(() => {
    ReactGA.pageview('/blog/javascript-objects');
  }, []);


  const handleCopy = (code, key) => {
    const isCopiedDefault = [
      { value: false },
      { value: false },
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
          <Title>JavaScript Objects</Title>
          <StyledTag src={JSIcon} />
        </Flex>
        <Spacer />
        <Text>
          After writing a blog post about arrays, which you can find here 👉 <StyledAnchorText><StyledNavLink exact to={`/blog/javascript-arrays`}>JavaScript Arrays</StyledNavLink></StyledAnchorText>. Naturally it feels like the next post needs to be about JavaScript Objects.
          Similar to my last post, I'll be keeping to the same format; that being explaining what objects are and how we can use them. Simple enough? Let's get it - Oh yeah, you can skip this if you're comfortable with JavaScript and you just want to look through the <StyledAnchor href="#use-case">use cases</StyledAnchor>.
          <Spacer />
          <Spacer />
          <SubTitle>What is an Object?</SubTitle>
          Well, in JavaScript objects are pretty much anything 'Non Primitive'. By using the <HighlightBackground>typeof</HighlightBackground> operator we can see for ourselves what is classed as an 'object'. This includes arrays, dates, regex and even functions;
          <Spacer />
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(objects, 0)}>
              {isCopied[0].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {objects}
          </CodeBlock>
          <Spacer />
          Now I mentioned objects being 'Non Primitive' values, if you're not clear on what the difference between a 'Primitive' and 'Non-Primitive' value is? <StyledAnchor href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank">Read up.</StyledAnchor> 👀
          <Spacer />
          <Spacer />
          What does that actually mean? It means that they are mutable (we can change them). Before looking at how we can access an objects properties, let's take a quick look at what an object is made of.
          <Spacer />
          <Spacer />
          <SubSubTitle>The Anatomy Of An Object</SubSubTitle>
          <StyledImage src={JavaScriptObject} />
          Here is a declaration of an object which I've named 'person'. This object has three 'properties' and you'll notice that each property will be a 'kvp' (key value pair). The left side being - 'key' and the right side - 'value'.
          <Spacer />
          <Spacer />
          <SubTitle>Object Manipulation</SubTitle>
          I mentioned that we can change objects, but before we do, I'll show you how we can access them using the <HighlightBackground> . </HighlightBackground>(Dot) and <HighlightBackground>[   ]</HighlightBackground> (Bracket) notations.
          <Spacer />
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(objectNotations, 1)}>
              {isCopied[1].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {objectNotations}
          </CodeBlock>
          <Spacer />
          Now if we wanted to manipulate the data, we could do so like so:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(objectNotationsTwo, 2)}>
              {isCopied[2].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {objectNotationsTwo}
          </CodeBlock>
          <Spacer />
          <SubTitle id='use-case'>Use Cases</SubTitle>
          I have an object, I would like to...
          <ObjectExplorer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default JavaScriptArray;
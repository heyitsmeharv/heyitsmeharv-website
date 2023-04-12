import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Wrapper = styled.div`
  padding: 1rem 4rem;
  line-height: 6.5rem;
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
  padding: 1rem 3rem 2rem;
  border-radius: 2rem;
  overflow-x: auto;
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

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const Spacer = styled.br``

const JavaScriptArray = () => {
  return (
    <Wrapper>
      <StyledNavButton>
        <StyledNavLink
          exact to={`/blog`}>
          <StyledBackIcon />
        </StyledNavLink>
      </StyledNavButton>
      <Container>
        <Title>JavaScript Arrays</Title>
        <Spacer />
        <Text>
          Do you ever find yourself forgetting what helper methods would be best to manipulate your data? In this post, I would like to go through different use cases for manipulating your data.
          <Spacer />
          But before we get into that, I'd just like to briefly tackle what an array is exactly and some useful tips. If you're not new to JavaScript, you can probably skip this part.
          <Spacer />
          <Spacer />
          <SubTitle>What is an Array?</SubTitle>
          <BoldText>"Arrays are technically objects which help with storing a collection of multiple data sets under a single variable name."</BoldText>
          <Spacer />
          <ul>
            <li>JavaScript arrays are resizable and can contain a mix of different data types (integers, object and even arrays themselves)</li>
            <CodeBlock>
              const starWarsCharacters = [ "starwars", {`starwars: [ { nameOne: "Luke", nameTwo: "Leia", nameThree: "Han" } ]`}, 4, ["starwars"] ];
            </CodeBlock>
            <li>JavaScript arrays are zero-indexed, which means they start at index 0, the second index being 1 and so forth.</li>
            <CodeBlock>
              const starWarsCharacters = [];
              <Spacer />
              starWarsCharacters.push("Luke", "Leia", "Han");
              <Spacer />
              console.log(starWarsCharacters[0]); // "Luke"
              <Spacer />
            </CodeBlock>
            <li>If you're wanting to get the last element of an array - you can always get the length of the array minus 1</li>
            <CodeBlock>
              const starWarsCharacters = ["Luke", "Leia", "Han"];
              <Spacer />
              console.log(starWarsCharacters[starWarsCharacters.length - 1]); // "Han"
              <Spacer />
            </CodeBlock>
          </ul>
          <Spacer />
          <SubTitle>Why Data Manipulation?</SubTitle>
          JavaScript Arrays come with helper methods which help with data manipulation, which was introduces with ES6 (ECMAScript 6). The reason why we need to manipulate data can be for several reasons, this could be
          because a front-end application needs it to be in a different format in order to easily display the data, or that we want the data to be more readable and understandable.
          <Spacer />
          <SubTitle>Helper Methods</SubTitle>
          Here are the helper methods that I'll be covering in this post. I'll be explaining how they work as well as the use cases for when you would want to use each of them:
          <li>map</li>
          <li>forEach</li>
          <li>filter</li>
          <li>find</li>
          <li>every</li>
          <li>some</li>
          <li>reduce</li>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default JavaScriptArray;
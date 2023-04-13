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
  padding: 1rem 3rem 2rem;
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
`

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
          Do you ever find yourself forgetting what helper methods would be best to manipulate your data? In this post, I would like to go through the different helper functions and the use cases for manipulating your data.
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
          <a href="#map"><StyledListItem>map</StyledListItem></a>
          <a href="#forEach"><StyledListItem>forEach</StyledListItem></a>
          <a href="#filter"><StyledListItem>filter</StyledListItem></a>
          <a href="#find"><StyledListItem>find</StyledListItem></a>
          <a href="#every"><StyledListItem>every</StyledListItem></a>
          <a href="#some"><StyledListItem>some</StyledListItem></a>
          <a href="#reduce"><StyledListItem>reduce</StyledListItem></a>
          <Spacer />
          <SubTitle id='map'>Map</SubTitle>
          The map helper method is an iterative method, meaning it loops through each element in the array and <BoldText>constructs a new array from the results.</BoldText> This can be quite handy when
          we want to manipulate the data into a new structure. The example below shows how we can remove the labels from each element in the array, and just show the key and value.
          <CodeBlock>
            const kvpArray = [
              {` key: 1, value: 10 `},
              {` key: 2, value: 20 `},
              {` key: 3, value: 30 `},
            ];
            <Spacer />
            const reformattedArray = kvpArray.map(({` key, value `}) => ({` [key]: value `}));
            <Spacer />
            console.log(reformattedArray); // [{` 1: 10 `}, {` 2: 20 `}, {` 3: 30 `}]
          </CodeBlock>
          It's also common to have conditions within a map function. For example, if you needed to specifically change an element within the array, you can set a condition. For example, let's say we need
          to ammend our data set to only have British spelling.
          <CodeBlock>
            const wordArray = [
              {` word: "Defence" `},
              {` word: "Color" `},
              {` word: "Offence" `},
            ];
            <Spacer />
            const reformattedArray = wordArray.map(item => {`
              if (item.word === "Color") {
                item.word = "Colour";
              }
              return item;
            `});
            <Spacer />
            console.log(reformattedArray); // [ {`word: "Defence"`}, {`word: "Colour"`}, {`word: "Offence"`} ];
          </CodeBlock>
          I know this is a bit of a tedious example, and I am by no means recommending this approach, but I just want to easily demonstrate that you can manipulate data sets with conditions.
        </Text>
      </Container>
    </Wrapper>
  );
}

export default JavaScriptArray;
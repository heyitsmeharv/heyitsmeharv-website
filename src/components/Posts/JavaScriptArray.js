import React from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

// codeblocks
import { example, mapExample, mapExample2, mapExample3, mapExample4, mapExample5, mapExample6, forLoop, forEachExample } from "../../helpers/codeblocks";

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

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
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
          Do you ever find yourself forgetting what helper methods would be best to manipulate your data? In this blog post, we will cover the basics of JavaScript arrays, including how to create them, access and modify their elements, and use built-in methods to manipulate them.
          But before we get into that, I'd just like to briefly tackle what an array is exactly and some useful tips. If you're not new to JavaScript, you can probably <StyledAnchor href="#skip">skip this part.</StyledAnchor>
          <Spacer />
          <Spacer />
          <SubTitle>What is an Array?</SubTitle>
          <BoldText>"Arrays are technically objects which help with storing a collection of multiple data sets under a single variable name."</BoldText>
          <Spacer />
          <ul>
            <li>JavaScript arrays are incredibly versatile and can be used to create complex data structures and algorithms.
              Arrays can be created using the Array constructor or by using literal notation. The most common method is using literal notation, which involves enclosing a list of values in square brackets.
              <Spacer />
              Here is an example:
            </li>
            <CodeBlock>
              {example}
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
          JavaScript Arrays come with helper methods which help with data manipulation. The reason why we need to manipulate data can be for several reasons, this could be
          because a front-end application needs it to be in a different format in order to easily display the data, or that we want the data to be more readable and understandable.
          <Spacer />
          <Spacer />
          <SubTitle id="skip">Helper Methods</SubTitle>
          Here are the helper methods that I'll be covering in this post. I'll be explaining how they work as well as the use cases for when you would want to use each of them:
          <StyledAnchor href="#map"><StyledListItem>map</StyledListItem></StyledAnchor>
          <StyledAnchor href="#forEach"><StyledListItem>forEach</StyledListItem></StyledAnchor>
          <StyledAnchor href="#filter"><StyledListItem>filter</StyledListItem></StyledAnchor>
          <StyledAnchor href="#find"><StyledListItem>find</StyledListItem></StyledAnchor>
          <StyledAnchor href="#every"><StyledListItem>every</StyledListItem></StyledAnchor>
          <StyledAnchor href="#some"><StyledListItem>some</StyledListItem></StyledAnchor>
          <StyledAnchor href="#reduce"><StyledListItem>reduce</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id='map'>Map</SubTitle>
          The map helper method is an iterative method, meaning it loops through each element in the array and <BoldText>constructs a new array from the results.</BoldText>
          <Spacer />
          <Heading>Syntax</Heading>
          <CodeBlock>array.map(function(currentValue, index, arr));</CodeBlock>
          This can be quite handy when we want to manipulate the data into a new structure. The example below shows how we can remove the labels from each element in the array, and just show the key and value.
          <CodeBlock>
            {mapExample}
            <Spacer />
            {mapExample2}
            <Spacer />
            {mapExample3}
          </CodeBlock>
          It's also common to have conditions within a map function. For example, if you needed to specifically change an element within the array, you can set a condition. Let's say we need
          to amend our data set to only have British spelling.
          <CodeBlock>
            {mapExample4}
            <Spacer />
            {mapExample5}
            <Spacer />
            {mapExample6}
          </CodeBlock>
          I know this is a bit of a tedious example, and I am by no means recommending this approach, but I just want to easily demonstrate that you can manipulate data sets with conditions.
          <Heading>Use Case</Heading>
          If you need to create a new array from the result of calling a function on every element in the array.

          <Spacer />
          <Spacer />
          <SubTitle id='forEach'>ForEach</SubTitle>
          The forEach helper method much like the map, is an iterative method, however a key difference is the output does not return a new array.
          <Spacer />
          <Heading>Syntax</Heading>
          <CodeBlock>array.forEach(function(currentValue, index, arr));</CodeBlock>
          The forEach method is a cleaner way of writing a 'for loop'.
          <CodeBlock>
            const items = ["item1", "item2", "item3"];
            <Spacer />
            const copyItems = [];
            <Spacer />
            {forLoop}
            <Spacer />
            {forEachExample}
          </CodeBlock>
          The typical use case is to execute side effects at the end of a chain.
          <Heading>Use Case</Heading>
          If you need to call a function on every element in the array.

          <Spacer />
          <Spacer />
          <SubTitle id='filter'>Filter</SubTitle>
          The filter helper method
          <Spacer />
          <Heading>Syntax</Heading>
          <CodeBlock>array.filter(function(currentValue, index, arr));</CodeBlock>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default JavaScriptArray;
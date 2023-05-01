import React from "react";
import styled from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import ArrayExplorer from "../ArrayExplorer/ArrayExplorer";

// codeblocks
import { example, mapExample, mapExample2, forLoop, forEachExample, filterExample, findExample, findExample2, everyExample, someExample } from "../../helpers/codeblocks";

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
          But before we get into that, I'd just like to briefly tackle what an array is exactly and some useful tips. If you're not new to JavaScript, you can probably <StyledAnchor href="#skip">skip this part.</StyledAnchor>. Alternatively, you can go straight to the  <StyledAnchor href="#use-case">use case </StyledAnchor>section where you can find what helper method you require depending on what you require.
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
            Notice that they can contain a mix of different data types (integers, object and even arrays themselves).
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
          Here are the helper methods that I'll be covering in this post:
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
          This can be quite handy when we want to manipulate the data into a new structure. The example below shows how we can remove the labels from each element in the array, and just show the key and value.
          <CodeBlock>
            {mapExample}
          </CodeBlock>
          It's also common to have conditions within a map function. For example, if you needed to specifically change an element within the array, you can set a condition. Let's say we need
          to amend our data set to only have British spelling.
          <CodeBlock>
            {mapExample2}
          </CodeBlock>
          I know this is a bit of a tedious example, and I am by no means recommending this approach, but I just want to easily demonstrate that you can manipulate data sets with conditions.
          <Spacer />
          <Spacer />
          <SubTitle id='forEach'>ForEach</SubTitle>
          The forEach helper method much like the map, is an iterative method, however a key difference is the output does not return a new array.
          <Spacer />
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
          <Spacer />
          <Spacer />
          <SubTitle id='filter'>Filter</SubTitle>
          The filter method is used to create a new array with all the elements that pass a certain condition. When iterating over each element it will return a boolean value (true or false) indicating whether the element should be included in the filtered array or not.
          <Spacer />
          Here is an example of filtering out all even numbers from an array:
          <CodeBlock>
            {filterExample}
          </CodeBlock>
          In this example, the callback function checks if the current number is odd by using the modulus operator (%) to check if it's divisible by 2 with a remainder.
          If the remainder is not 0, the number is odd and true is returned, so it is included in the oddNumbers array.
          <Spacer />
          <Spacer />
          <SubTitle id='find'>Find</SubTitle>
          The find method is used to search an array for a <BoldText>specific element</BoldText> and <BoldText>returns the first element</BoldText> in the array that satisfies the given condition.
          <Spacer />
          Here is an example of the find method out to search an array for a specific element:
          <CodeBlock>
            {findExample}
          </CodeBlock>
          In this example, the callback function checks if the current number is greater than 3. The method then returns the first element in the array that satisfies this condition, which is 4.
          If no element satisfies the search condition, the method returns undefined.
          <CodeBlock>
            {findExample2}
          </CodeBlock>
          In this example, there is no element in the array greater than 10, so the method returns undefined.
          <Spacer />
          <Spacer />
          <SubTitle id='every'>Every</SubTitle>
          The every method is used to test whether <BoldText>all elements</BoldText> in an array passes a certain condition or not. It returns a boolean value (true or false) indicating whether every element in the array satisfies the given condition.
          <Spacer />
          Here is an example of testing if all elements in the array have a length of less than 4:
          <CodeBlock>
            {everyExample}
          </CodeBlock>
          In this example, the callback function checks each element's length and because the length of the string 'Anakin' is bigger than 4 the return will be false despite the other elements satisfying the condition.
          <Spacer />
          <Spacer />
          <SubTitle id='some'>Some</SubTitle>
          The some method is used to test <BoldText>at least one element</BoldText> in an array passes a certain condition or not. It returns a boolean value (true or false) indicating whether any element in the array satisfies the given condition.
          <Spacer />
          Here is an example of testing if there are any elements in the array that are odd:
          <CodeBlock>
            {someExample}
          </CodeBlock>
          In this example, the callback function performs a calculation on each element (checks to see if the number is divisible by 2) and returns true because there is one element that does not meet the condition (7).
          <Spacer />
          <Spacer />
          <SubTitle id='reduce'>Reduce</SubTitle>
          The reduce method is used to <BoldText>reduce the values of an array to a single value.</BoldText> It iterates over an array and applies a function to each element of the array, accumulating the result as it goes along.
          <Spacer />
          Here is an example of using the reduce method to find the sum of an array of numbers:
          <CodeBlock>
            {someExample}
          </CodeBlock>
          In this example, the callback function takes two arguments, the accumulator and the currentValue. It returns the sum of the accumulator and the currentValue. The reduce method then accumulates the result of each iteration, starting with an initial value of 0.
          If no initial value is provided, the reduce method uses the first element of the array as the initial value, and starts iterating from the second element.
          <Spacer />
          <Spacer />
          <SubTitle id='use-case'>Use Cases</SubTitle>
          I have an array and I would like to...
          <ArrayExplorer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default JavaScriptArray;
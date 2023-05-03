import React, { useState } from "react";
import styled from "styled-components";

// components
import Select from 'react-select';

// helpers
import { options } from './options';

// animations
import SlideInLeft from "../../animations/SlideInLeft";

const StyledSelect = styled(Select)`
  & .Select__menu {
    color: ${({ theme }) => theme.text};
    background:  ${({ theme }) => theme.secondary};
  }

  & .Select__option {
    background:  ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    &:hover {
      background:  ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
    }
  }

  // BUG: NESTED OPTIONS MEANS THE SELECT STATE IS GLOBAL - TEMP FIX
  & .Select__option--is-focused {
    background:  ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    &:hover {
      background: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
    }
  }
  & .Select__option--is-selected {
    background:  ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    &:hover {
      background: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
    }
  }
`;

const Container = styled.div`
  padding: 2.5rem 0;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInLeft} 0.5s forwards;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
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

const SolutionBlock = styled.pre`
  font-family: 'monospace';
  font-size: 2rem;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  word-wrap: break-word;
  padding: 1rem 2rem 1rem;
  border-radius: 2rem;
  overflow-x: auto;
  line-height: 3.5rem;
`;

const Spacer = styled.br``;

const ArrayExplorer = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [secondSelectedOptions, setSecondSelectedOptions] = useState([]);
  const [thirdSelectedOptions, setThirdSelectedOptions] = useState([]);

  const handleSelectChange = (selected, option) => {
    switch (option) {
      case "first":
        setSelectedOptions(selected)
        setSecondSelectedOptions([]);
        setThirdSelectedOptions([]);
        break;
      case "second":
        setSecondSelectedOptions(selected)
        setThirdSelectedOptions([]);
        break;
      case "third":
        setThirdSelectedOptions(selected)
        break;
      default:
    }
  };

  console.log('selectedOptions', selectedOptions);
  console.log('secondSelectedOptions', secondSelectedOptions);

  return (
    <>
      <StyledSelect
        classNamePrefix={'Select'}
        options={options}
        value={selectedOptions}
        onChange={s => handleSelectChange(s, 'first')}
      />
      {Object.keys(selectedOptions).length !== 0 ?
        <>
          <Text>{selectedOptions.secondSelectText}</Text>
          <StyledSelect
            classNamePrefix={'Select'}
            options={selectedOptions.secondOptions}
            value={secondSelectedOptions}
            onChange={s => handleSelectChange(s, 'second')}
          />
          {Object.keys(secondSelectedOptions).length !== 0 && secondSelectedOptions.thirdOptions ?
            <>
              <Text>{selectedOptions.thirdSelectText}</Text>
              <StyledSelect
                classNamePrefix={'Select'}
                options={secondSelectedOptions.thirdOptions}
                value={thirdSelectedOptions}
                onChange={s => handleSelectChange(s, 'third')}
              />
            </>
            : ''}
          {secondSelectedOptions.usage && secondSelectedOptions.output ?
            <Container>
              <Text>Solution</Text>
              <SolutionBlock>
                <Text>{secondSelectedOptions.helper}</Text>
                <Spacer />
                <Text>{secondSelectedOptions.helperDescription}</Text>
              </SolutionBlock>
              <Text>Usage</Text>
              <SolutionBlock>{secondSelectedOptions.usage}</SolutionBlock>
              <Text>Output</Text>
              <SolutionBlock>{secondSelectedOptions.output}</SolutionBlock>
            </Container>
            : ''}

          {thirdSelectedOptions.usage && thirdSelectedOptions.output ?
            <Container>
              <Text>Solution</Text>
              <SolutionBlock>
                <Text>{thirdSelectedOptions.helper}</Text>
                <Spacer />
                <Text>{thirdSelectedOptions.helperDescription}</Text>
              </SolutionBlock>
              <Text>Usage</Text>
              <SolutionBlock>{thirdSelectedOptions.usage}</SolutionBlock>
              <Text>Output</Text>
              <SolutionBlock>{thirdSelectedOptions.output}</SolutionBlock>
            </Container>
            : ''}
          <Spacer />
        </>
        : ''}
    </>
  );
}

export default ArrayExplorer;
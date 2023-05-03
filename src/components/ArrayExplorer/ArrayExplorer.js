import React, { useState } from "react";
import styled from "styled-components";

// components
import Select from 'react-select';

// helpers
import { options } from './options';

const StyledSelect = styled(Select)`
  & .Select__menu {
    color: ${({ theme }) => theme.text};
    background:  ${({ theme }) => theme.secondary};
  }

  & .Select__option {
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
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
          {secondSelectedOptions.usage && secondSelectedOptions.output ?
            <>
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
            </>
            : ''}
          <Spacer />
          {Object.keys(thirdSelectedOptions).length !== 0 ?
            <>
              <StyledSelect
                classNamePrefix={'Select'}
                options={selectedOptions.thirdOptions}
                value={thirdSelectedOptions}
                onChange={s => handleSelectChange(s, 'third')}
              />
              {thirdSelectedOptions.usage ?
                <>
                  <Text>Usage</Text>
                  <CodeBlock>{thirdSelectedOptions.usage}</CodeBlock>
                </>
                : ''}
              {thirdSelectedOptions.output ?
                <>
                  <Text>Output</Text>
                  <CodeBlock>{thirdSelectedOptions.output}</CodeBlock>
                </>
                : ''}
            </>
            : ''}
        </>
        : ''}
    </>
  );
}

export default ArrayExplorer;
import React, { useState } from "react";
import styled from "styled-components";

import Select from 'react-select';

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const Spacer = styled.br``;

const ArrayExplorer = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [secondSelectedOptions, setSecondSelectedOptions] = useState([]);
  const [thirdSelectedOptions, setThirdSelectedOptions] = useState([]);

  const options = [
    { value: 'I need to add', label: 'Add items or other arrays', secondOptions: [{ value: 'I need to add', label: 'Elements/s to an array' }, { value: 'I need to add', label: 'Elements/s to the end of an array' }, { value: 'I need to add', label: 'Elements/s to the front of an array' }, { value: 'I need to add', label: 'this array to other array(s) and/or value(s)' }] },
    { value: 'I need to remove', label: 'Remove items', secondOptions: [{ value: 'I need to remove', label: 'Elements/s from an array' }, { value: 'I need to remove', label: 'The last element of the array' }, { value: 'I need to remove', label: 'The first element of an array' }, { value: 'I need to remove', label: 'one or more elements in order for use, leaving the array as is' }] },
    { value: `I'm trying to find`, label: 'Find items', secondOptions: [{ value: `I'm trying to find`, label: 'one item' }, { value: `I'm trying to find`, label: 'one or many items' }], thirdOptions: [{ value: 'I need to find', label: 'Values based on a condition I create' }, { value: 'TEST', label: 'Whether or not every item satisfies a condition' }, { value: 'I need to find', label: 'Whether or not at least one item satisfies a condition' }] },
    { value: 'I need to iterate by', label: 'Walk over items', secondOptions: [] },
    { value: 'I need to', label: 'Return a string', secondOptions: [] },
    { value: 'I need to', label: 'Order an array', secondOptions: [] },
    { value: 'I need to', label: 'Something else', secondOptions: [] },
  ];

  const handleSelectChange = (selected, option) => {
    switch (option) {
      case "first":
        setSelectedOptions(selected)
        break;
      case "second":
        setSecondSelectedOptions(selected)
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
      <Select
        options={options}
        value={selectedOptions}
        onChange={s => handleSelectChange(s, 'first')}
      />
      {Object.keys(selectedOptions).length !== 0 ?
        <>
          <Text>{selectedOptions.value}</Text>
          <Select
            options={selectedOptions.secondOptions}
            value={secondSelectedOptions}
            onChange={s => handleSelectChange(s, 'second')}
          />
          <Spacer />
          {secondSelectedOptions && Object.keys(secondSelectedOptions).length !== 0 && selectedOptions.thirdOptions ?
            <>
              <Select
                options={selectedOptions.thirdOptions}
                value={thirdSelectedOptions}
                onChange={s => handleSelectChange(s, 'third')}
              />
            </>
            : ''}
        </>
        : ''}
    </>
  );
}

export default ArrayExplorer;
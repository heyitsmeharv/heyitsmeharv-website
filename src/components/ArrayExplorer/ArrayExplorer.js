import React, { useState } from "react";
import styled from "styled-components";

import Select from 'react-select';

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const ArrayExplorer = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [secondSelectedOptions, setSecondSelectedOptions] = useState([]);

  const options = [
    { value: 'I need to add', label: 'Add items or other arrays', secondOptions: [{ value: 'TEST', label: 'Elements/s to an array' }, { value: 'TEST', label: 'Elements/s to the end of an array' }, { value: 'TEST', label: 'Elements/s to the front of an array' }, { value: 'TEST', label: 'this array to other array(s) and/or value(s)' }] },
    { value: 'I need to remove', label: 'Remove items', secondOptions: [{ value: 'TEST', label: 'Elements/s from an array' }, { value: 'TEST', label: 'The last element of the array' }, { value: 'TEST', label: 'The first element of an array' }, { value: 'TEST', label: 'one or more elements in order for use, leaving the array as is' }] },
    { value: `I'm trying to find`, label: 'Find items', secondOptions: [{ value: 'TEST', label: 'one item' }, { value: 'TEST', label: 'one or many items' }], thirdOptions: [{ value: 'TEST', label: 'Values based on a condition I create' }, { value: 'TEST', label: 'Whether or not every item satisfies a condition' }, { value: 'TEST', label: 'Whether or not at least one item satisfies a condition' }] },
    { value: 'I need to iterate by', label: 'Walk over items', secondOptions: [] },
    { value: 'I need to', label: 'Return a string', secondOptions: [] },
    { value: 'I need to', label: 'Order an array', secondOptions: [] },
    { value: 'I need to', label: 'Something else', secondOptions: [] },
  ];

  // const secondSelectOptions = [
  //   { value: 'add', label: 'Add items or other arrays' },
  //   { value: 'remove', label: 'Remove items' },
  //   { value: 'find', label: 'Find items ' },
  //   { value: 'walk', label: 'Walk over items' },
  //   { value: 'return', label: 'Return a string' },
  //   { value: 'order', label: 'Order an array' },
  //   { value: 'other', label: 'Something else' },
  // ];

  const handleSelectChange = (order, s) => {
    // return order === 'first' ? setFirstSelectedOptions(s) : setSecondSelectedOptions(s);
    setSelectedOptions(s)
  };

  return (
    <>
      <Select
        options={options}
        value={selectedOptions}
        onChange={s => handleSelectChange('first', s)}
      />
      {Object.keys(selectedOptions).length !== 0 ?
        <>
          <Text>{selectedOptions?.value}</Text>
          <Select
            options={selectedOptions?.secondOptions}
            value={selectedOptions}
            onChange={s => handleSelectChange('second', s)}
          />
        </>
        : ''}
      {/* {Object.keys(selectedOptions.thirdOptions).length !== 0 ?
        <>
          <Text>{selectedOptions.value}</Text>
          <Select
            options={selectedOptions.thirdOptions}
            value={selectedOptions}
            onChange={s => handleSelectChange('third', s)}
          />
        </>
        : ''} */}
    </>
  );
}

export default ArrayExplorer;
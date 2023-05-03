// examples
import {
  spliceExample,
  spliceExampleOutput,
  spliceSecondExample,
  spliceSecondExampleOutput,
  pushExample,
  pushExampleOutput,
  unshiftExample,
  unshiftExampleOutput,
  concatExample,
  concatExampleOutput,
  popExample,
  popExampleOutput,
  shiftExample,
  shiftExampleOutput,
  sliceExample,
  sliceExampleOutput
} from "./codeExamples";

export const options = [
  {
    secondSelectText: 'I need to add',
    label: 'Add items or other arrays',
    secondOptions: [
      {
        label: 'Elements/s to an array',
        helper: 'Array.splice()',
        helperDescription: 'Adds and/or removes elements from an array.',
        usage: spliceExample,
        output: spliceExampleOutput
      },
      {
        label: 'Elements/s to the end of an array',
        helper: 'Array.push()',
        helperDescription: 'Adds one or more elements to the end of an array and returns the new length of the array.',
        usage: pushExample,
        output: pushExampleOutput
      },
      {
        label: 'Elements/s to the front of an array',
        helper: 'Array.unshift()',
        helperDescription: 'Adds one or more elements to the front of an array and returns the new length of the array.',
        usage: unshiftExample,
        output: unshiftExampleOutput
      },
      {
        label: 'this array to other array(s) and/or value(s)',
        helper: 'Array.concat()',
        helperDescription: 'Returns a new array comprised of this array joined with other array(s) and/or value(s).',
        usage: concatExample,
        output: concatExampleOutput
      }
    ]
  },
  {
    secondSelectText: 'I need to remove',
    label: 'Remove items',
    secondOptions: [
      {
        label: 'Elements/s from an array',
        helper: 'Array.splice()',
        helperDescription: 'Adds and/or removes elements from an array.',
        usage: spliceSecondExample,
        output: spliceSecondExampleOutput
      },
      {
        label: 'The last element of the array',
        helper: 'Array.pop()',
        helperDescription: 'Removes the last element from an array and returns that element.',
        usage: popExample,
        output: popExampleOutput
      },
      {
        label: 'The first element of an array',
        helper: 'Array.shift()',
        helperDescription: 'Removes the first element from an array and returns that element.',
        usage: shiftExample,
        output: shiftExampleOutput
      },
      {
        label: 'one or more elements in order for use, leaving the array as is',
        helper: 'Array.slice()',
        helperDescription: `The slice() method returns a shallow copy of a portion of an array into a new array object. You can specify either just the beginning element 
(where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.`,
        usage: sliceExample,
        output: sliceExampleOutput
      }
    ]
  },
  {
    secondSelectText: `I'm trying to find`,
    label: 'Find items',
    secondOptions: [
      {
        value: `I'm trying to find`,
        label: 'one item'
      }, {
        value: `I'm trying to find`,
        label: 'one or many items'
      }
    ],
    thirdOptions: [
      {
        value: 'I need to find',
        label: 'Values based on a condition I create'
      },
      {
        value: 'TEST',
        label: 'Whether or not every item satisfies a condition'
      },
      {
        value: 'I need to find',
        label: 'Whether or not at least one item satisfies a condition'
      }
    ]
  },
  {
    secondSelectText: 'I need to iterate by',
    label: 'Walk over items',
    secondOptions: []
  },
  {
    secondSelectText: 'I need to',
    label: 'Return a string',
    secondOptions: []
  },
  {
    secondSelectText: 'I need to',
    label: 'Order an array', secondOptions: []
  },
  {
    secondSelectText: 'I need to',
    label: 'Something else',
    secondOptions: []
  },
];

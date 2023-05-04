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
  sliceExampleOutput,
  includesExample,
  includesExampleOutput,
  indexOfExample,
  indexOfExampleOutput,
  lastIndexOfExample,
  lastIndexOfExampleOutput,
  findExample,
  findExampleOutput,
  findIndexExample,
  findIndexExampleOutput,
  reduceExample,
  reduceExampleOutput,
  reduceRightExample,
  reduceRightExampleOutput,
  filterExample,
  filterExampleOutput,
  everyExample,
  everyExampleOutput,
  someExample,
  someExampleOutput,
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
    thirdSelectText: `I need to find`,
    label: 'Find items',
    secondOptions: [
      {
        label: 'one item',
        thirdOptions: [
          {
            label: `out if a certain element exists`,
            helper: 'Array.includes()',
            helperDescription: 'Determines whether an array contains a certain element, returning true or false as appropriate.',
            usage: includesExample,
            output: includesExampleOutput
          },
          {
            label: `the first index of a particular item`,
            helper: 'Array.indexOf()',
            helperDescription: 'Returns the first index at which a given element can be found in the array, or -1 if it is not present.',
            usage: indexOfExample,
            output: indexOfExampleOutput
          },
          {
            label: `the last index of a particular item`,
            helper: 'Array.lastIndexOf()',
            helperDescription: 'Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.',
            usage: lastIndexOfExample,
            output: lastIndexOfExampleOutput
          },
          {
            label: `the first element that satisfies a condition`,
            helper: 'Array.find()',
            helperDescription: 'Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. Similar to findIndex(), but it returns the item instead of the index.',
            usage: findExample,
            output: findExampleOutput
          },
          {
            label: `the first index of an item that satisfies a condition`,
            helper: 'Array.findIndex()',
            helperDescription: 'Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. Similar to find(), but it returns the index instead of the item.',
            usage: findIndexExample,
            output: findIndexExampleOutput
          },
          {
            label: `a value by reducing the Array, start to finish`,
            helper: 'Array.reduce()',
            helperDescription: 'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
            usage: reduceExample,
            output: reduceExampleOutput
          },
          {
            label: `a value by reducing the Array, finish to start`,
            helper: 'Array.reduceRight()',
            helperDescription: 'Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.',
            usage: reduceRightExample,
            output: reduceRightExampleOutput
          },
        ]
      },
      {
        label: 'one or many items',
        thirdOptions: [
          {
            label: `values based on a condition I create`,
            helper: 'Array.filter()',
            helperDescription: 'Creates a new array with all of the elements of this array for which the provided filtering function returns true.',
            usage: filterExample,
            output: filterExampleOutput
          },
          {
            label: `whether or not every item satisfies a condition`,
            helper: 'Array.every()',
            helperDescription: 'Returns true if every element in this array satisfies the provided testing function.',
            usage: everyExample,
            output: everyExampleOutput
          },
          {
            label: `whether or not at least one item satisfies a condition`,
            helper: 'Array.some()',
            helperDescription: 'Returns true if at least one element in this array satisfies the provided testing function.',
            usage: someExample,
            output: someExampleOutput
          }
        ],
      }
    ],
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

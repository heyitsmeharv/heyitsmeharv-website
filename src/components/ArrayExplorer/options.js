// examples
import { addExampleUsage, addExampleOutput } from "./codeExamples";

export const options = [
  {
    secondSelectText: 'I need to add',
    label: 'Add items or other arrays',
    secondOptions: [
      {
        label: 'Elements/s to an array',
        helper: 'Array.splice()',
        helperDescription: 'Adds and/or removes elements from an array.',
        usage: addExampleUsage,
        output: addExampleOutput
      },
      {
        value: 'I need to add',
        label: 'Elements/s to the end of an array'
      },
      {
        value: 'I need to add',
        label: 'Elements/s to the front of an array'
      },
      {
        value: 'I need to add',
        label: 'this array to other array(s) and/or value(s)'
      }
    ]
  },
  {
    secondSelectText: 'I need to remove',
    label: 'Remove items',
    secondOptions: [
      {
        value: 'I need to remove',
        label: 'Elements/s from an array'
      },
      {
        value: 'I need to remove',
        label: 'The last element of the array'
      },
      {
        value: 'I need to remove',
        label: 'The first element of an array'
      },
      {
        value: 'I need to remove',
        label: 'one or more elements in order for use, leaving the array as is'
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

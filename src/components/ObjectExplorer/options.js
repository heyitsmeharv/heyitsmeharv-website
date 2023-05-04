// examples
import {
  createExample,
  createExampleOutput,
  assignExample,
  assignExampleOutput,
  definePropertyExample,
  definePropertyExampleOutput,
  definePropertiesExample,
  definePropertiesExampleOutput,
  isExtensibleExample,
  isExtensibleExampleOutput,
  isExample,
  isExampleOutput,
  isFrozenExample,
  isFrozenExampleOutput,
  isSealedExample,
  isSealedExampleOutput,
  isPrototypeOfExample,
  isPrototypeOfExampleOutput,
  getOwnPropertyDescriptorExample,
  getOwnPropertyDescriptorExampleOutput,
  getOwnPropertyDescriptorsExample,
  getOwnPropertyDescriptorsExampleOutput,
  propertyIsEnumerableExample,
  propertyIsEnumerableExampleOutput,
  hasOwnPropertyExample,
  hasOwnPropertyExampleOutput,
  keysExample,
  keysExampleOutput,
  valuesExample,
  valuesExampleOutput,
  entriesExample,
  entriesExampleOutput,
  getOwnPropertyNamesExample,
  getOwnPropertyNamesExampleOutput,
  sealExample,
  sealExampleOutput,
  freezeExample,
  freezeExampleOutput,
  preventExtensionsExample,
  preventExtensionsExampleOutput,
  toStringExample,
  toStringExampleOutput,
  toLocaleStringExample,
  toLocaleStringExampleOutput,
  getPrototypeOfExample,
  getPrototypeOfExampleOutput,
  setPrototypeOfExample,
  setPrototypeOfExampleOutput
} from "./codeExamples";

export const options = [
  {
    secondSelectText: 'I need to',
    label: 'create an object',
    secondOptions: [
      {
        label: 'create a new object',
        helper: 'Object.create()',
        helperDescription: `Creates a new object with the specified prototype object and properties.
Important note for beginners! 
It's more common to create an object the way that it's shown at the top of the example, like this let obj = { a: 1 };`,
        usage: createExample,
        output: createExampleOutput
      },
      {
        label: 'make a copy of an object',
        helper: 'Object.assign()',
        helperDescription: `Copies the values of all enumerable own properties from one or more source objects to a target object. 
It will return the target object. Though not technically a built in object method, it's more common when using ES6 to make use of the Spread Operator, by using ...`,
        usage: assignExample,
        output: assignExampleOutput
      }
    ]
  },
  {
    secondSelectText: 'I need to create',
    label: 'create properties',
    secondOptions: [
      {
        label: 'a new property or modify an existing one',
        helper: 'Object.defineProperty()',
        helperDescription: `Adds the named property described by a given descriptor to an object.
Important note for beginners! It's more common to use dot or square bracket notation to create a 
new property or modify an existing one. Like this: obj.a = 1 or obj[a] = 1. This isn't technically a built-in method, that's why it's not included.`,
        usage: definePropertyExample,
        output: definePropertyExampleOutput
      },
      {
        label: 'one or more properties or modify existing properties',
        helper: 'Object.defineProperties()',
        helperDescription: `Adds one or more properties described by a given descriptor to an object. 
Important note for beginners! It's more common to use dot or square bracket notation to create a 
new property or modify an existing one. Like this: obj.a = 1 or obj[a] = 1. 
This isn't technically a built-in method, that's why it's not included.`,
        usage: definePropertiesExample,
        output: definePropertiesExampleOutput
      }
    ]
  },
  {
    secondSelectText: 'I need to determine',
    label: 'get information about an object',
    secondOptions: [
      {
        label: 'if more properties can be added',
        helper: 'Object.isExtensible()',
        helperDescription: `Determines if extending of an object is allowed.`,
        usage: isExtensibleExample,
        output: isExtensibleExampleOutput
      },
      {
        label: 'if two references point to the same object',
        helper: 'Object.is()',
        helperDescription: `Compares if two references point to the same object. 
Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison). 
This one is a little weird, and the MDN docs are a bit misleading. It's more useful to use triple equals === to check equality`,
        usage: isExample,
        output: isExampleOutput
      },
      {
        label: `if an object and its properties can't be modified`,
        helper: 'Object.isFrozen()',
        helperDescription: `Determines if an object is frozen.`,
        usage: isFrozenExample,
        output: isFrozenExampleOutput
      },
      {
        label: `if an object can't be modified (its properties can be, though)`,
        helper: 'Object.isSealed()',
        helperDescription: `Determines if the descriptor of its properties can't be changed and new properties can't be created.`,
        usage: isSealedExample,
        output: isSealedExampleOutput
      },
      {
        label: `if an object can't be modified (its properties can be, though)`,
        helper: 'Object.isPrototypeOf()',
        helperDescription: `Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.`,
        usage: isPrototypeOfExample,
        output: isPrototypeOfExampleOutput
      }
    ]
  },
  {
    secondSelectText: `I need to get`,
    label: 'get information about properties',
    secondOptions: [
      {
        thirdSelectText: `I need to find out`,
        label: 'details about the property',
        thirdOptions: [
          {
            label: `details about a property`,
            helper: 'Object.getOwnPropertyDescriptor()',
            helperDescription: 'Returns a property descriptor for a named property on an object.',
            usage: getOwnPropertyDescriptorExample,
            output: getOwnPropertyDescriptorExampleOutput
          },
          {
            label: `details about all the properties on an object`,
            helper: 'Object.getOwnPropertyDescriptors()',
            helperDescription: 'Returns an object containing all own property descriptors for an object.',
            usage: getOwnPropertyDescriptorsExample,
            output: getOwnPropertyDescriptorsExampleOutput
          },
          {
            label: `if a property can be traversed with a for...in loop`,
            helper: 'Object.propertyIsEnumerable()',
            helperDescription: 'Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set. This can be used to see if something is a built-in or user-defined method because built-in properties tend to not be enumerable',
            usage: propertyIsEnumerableExample,
            output: propertyIsEnumerableExampleOutput
          },
          {
            label: `if a property exists as a direct property of the object `,
            helper: 'Object.hasOwnProperty()',
            helperDescription: 'Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.',
            usage: hasOwnPropertyExample,
            output: hasOwnPropertyExampleOutput
          }
        ]
      },
      {
        thirdSelectText: `I need to get an array of all of the`,
        label: 'a list of all the keys and/or values',
        thirdOptions: [
          {
            label: `keys`,
            helper: 'Object.keys()',
            helperDescription: `Returns an array containing the names of all of the object's keys that can be looped through, in the order that they would be looped through.`,
            usage: keysExample,
            output: keysExampleOutput
          },
          {
            label: `values`,
            helper: 'Object.values()',
            helperDescription: `Returns an array containing the names of all of the object's values that can be looped through, in the order that they would be looped through.`,
            usage: valuesExample,
            output: valuesExampleOutput
          },
          {
            label: `keys and values`,
            helper: 'Object.entries()',
            helperDescription: `Returns a nested array containing the names of all of the object's key/value pairs that can be looped through, in the order that they would be looped through.`,
            usage: entriesExample,
            output: entriesExampleOutput
          },
          {
            label: `keys, even if you can't loop through them`,
            helper: 'Object.hasOwnProperty()',
            helperDescription: 'Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.',
            usage: getOwnPropertyNamesExample,
            output: getOwnPropertyNamesExampleOutput
          }
        ]
      },
    ],
  },
  {
    secondSelectText: 'I need to',
    label: 'restrict changes to an object',
    secondOptions: [
      {
        label: `make sure properties can't be added or deleted`,
        helper: 'Object.seal()',
        helperDescription: 'Prevents other code from deleting properties of an object. Existing properties can still be modified.',
        usage: sealExample,
        output: sealExampleOutput
      },
      {
        label: `make sure properties can't be added, deleted or modified`,
        helper: 'Object.freeze()',
        helperDescription: `Freezes an object: other code can't delete or change any properties.`,
        usage: freezeExample,
        output: freezeExampleOutput
      },
      {
        label: `make sure properties can't be added`,
        helper: 'Object.preventExtensions()',
        helperDescription: `Prevents any extensions of an object. I can still delete properties but can't add any new ones.`,
        usage: preventExtensionsExample,
        output: preventExtensionsExampleOutput
      }
    ]
  },
  {
    secondSelectText: 'I need to',
    label: 'create a string from an object',
    secondOptions: [
      {
        label: `string representation of the object`,
        helper: 'Object.toString()',
        helperDescription: `The toString() method returns a string representing the object. Though this is the built-in method available, it's usually more useful to use JSON.stringify()`,
        usage: toStringExample,
        output: toStringExampleOutput
      },
      {
        label: `localized string representation of the object`,
        helper: 'Object.toLocaleString()',
        helperDescription: `The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes. In human terms: this means if you have something that has different data based on location, such as date methods, it will give you a different time format`,
        usage: toLocaleStringExample,
        output: toLocaleStringExampleOutput
      },
      {
        label: `make sure properties can't be added`,
        helper: 'Object.preventExtensions()',
        helperDescription: `Prevents any extensions of an object. I can still delete properties but can't add any new ones.`,
        usage: preventExtensionsExample,
        output: preventExtensionsExampleOutput
      }
    ]
  },
  {
    secondSelectText: 'I need to',
    label: 'manage prototypes',
    secondOptions: [
      {
        label: `get a prototype of the object`,
        helper: 'Object.getPrototypeOf()',
        helperDescription: `Returns the prototype of the specified object. (i.e. the value of the internal [[Prototype]] property) of the specified object).`,
        usage: getPrototypeOfExample,
        output: getPrototypeOfExampleOutput
      },
      {
        label: `set a prototype of the object`,
        helper: 'Object.setPrototypeOf()',
        helperDescription: `Warning: this method is really slow. Use with caution, or replace with Object.create(). Sets the prototype (i.e., the internal [[Prototype]] property).`,
        usage: setPrototypeOfExample,
        output: setPrototypeOfExampleOutput
      },
      {
        label: `find out if the object is in the prototype chain`,
        helper: 'Object.isPrototypeOf()',
        helperDescription: `Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.`,
        usage: isPrototypeOfExample,
        output: isPrototypeOfExampleOutput
      }
    ]
  }
];

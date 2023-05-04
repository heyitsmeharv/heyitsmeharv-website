export const example = `const starWarsCharacters = [ "starwars", { starwars: [ { nameOne: "Luke", nameTwo: "Leia", nameThree: "Han" } ] }, 4, ["starwars"] ];`
export const mapExample = `const kvpArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
const reformattedArray = kvpArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]`;
export const mapExample2 = `const wordArray = [
  { word: "Defence" },
  { word: "Color" },
  { word: "Offence" },
];

const reformattedArray = wordArray.map(item => {
  if (item.word === "Color") {
    item.word = "Colour";
  }
  return item;
});

console.log(reformattedArray); // [ { word: "Defence" }, { word: "Colour" }, { word: "Offence" } ];
`;
export const forLoop = `for (let i = 0; i < item.length; i++) {
  copyItems.push(items[i]);
}`;
export const forEachExample = `items.forEach(item => {
  copyItems.push(item);
});`;
export const filterExample = `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => {
  return num % 2 !== 0;
});

console.log(oddNumbers); // [1, 3, 5, 7, 9]
`;
export const findExample = `const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find(num => {
  return num > 3;
});

console.log(foundNumber); // 4
`;
export const findExample2 = `const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find(num => {
  return num > 10;
});

console.log(foundNumber); // undefined
`;

export const everyExample = `const names = ["luke", "Leia", "Han", "Anakin"];

const shortNames = names.every(name => {
  return name.length < 4;
});

console.log(shortNames); // false
`;

export const someExample = `const numbers = [2, 4, 6, 7, 8];

const hasOdd = numbers.some(function(num) {
  return num % 2;
});

console.log(hasOdd); // true`;

export const reduceExample = `const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
`;

export const objectNotations = `let person = { 
  firstName: "Adam", 
  lastName: "Harvey", 
  age: 29 
};
person.firstName; // Adam (Dot notation)
person['firstName']; // Adam (Bracket notation)
`;

export const objectNotationsTwo = `let person = { 
  firstName: "Adam", 
  lastName: "Harvey", 
  age: 29 
};

// it's that simple!
person.age = 21;
person['age'] = 21;

person: { 
  firstName: "Adam", 
  lastName: "Harvey", 
  age: 21 
};
`;
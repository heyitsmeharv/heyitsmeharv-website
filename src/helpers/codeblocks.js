export const example = `const starWarsCharacters = [ "starwars", { starwars: [ { nameOne: "Luke", nameTwo: "Leia", nameThree: "Han" } ] }, 4, ["starwars"] ];`
export const mapExample = `const kvpArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];`;
export const mapExample2 = `const reformattedArray = kvpArray.map(({ key, value }) => ({ [key]: value }));`;
export const mapExample3 = `console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]`;
export const mapExample4 = `const wordArray = [
  { word: "Defence" },
  { word: "Color" },
  { word: "Offence" },
];`;
export const mapExample5 = `const reformattedArray = wordArray.map(item => {
  if (item.word === "Color") {
    item.word = "Colour";
  }
  return item;
});`;
export const mapExample6 = `console.log(reformattedArray); // [ { word: "Defence" }, { word: "Colour" }, { word: "Offence" } ];`;
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
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
`;
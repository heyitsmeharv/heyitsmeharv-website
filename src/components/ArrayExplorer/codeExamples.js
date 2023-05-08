export const spliceExample = `let arr = [5, 1, 8];
arr.splice(2, 0, 'tacos');
console.log(arr);
`;

export const spliceExampleOutput = `[5, 1, 'tacos', 8]`;

export const spliceSecondExample = `let arr = [5, 1, 8];
arr.splice(2, 1);
console.log(arr);
`;

export const spliceSecondExampleOutput = `[5, 1]`;

export const pushExample = `let arr = [5, 1, 8];
arr.push(2);
console.log(arr);
`;

export const pushExampleOutput = `[5, 1, 'tacos', 8]`;

export const unshiftExample = `let arr = [5, 1, 8];
arr.unshift(2, 7);
console.log(arr);
`;

export const unshiftExampleOutput = `[2, 7, 5, 1, 8]`;

export const concatExample = `let arr = [5, 1, 8];
let arr2 = ['a', 'b', 'c'];
let arr3 = arr.concat(arr2);
console.log(arr3);
`;

export const concatExampleOutput = `[5, 1, 8, 'a', 'b', 'c']`;

export const popExample = `let arr = [5, 1, 8];
arr.pop();
console.log(arr);
`;

export const popExampleOutput = `[5, 1]`;

export const shiftExample = `let arr = [5, 1, 8];
arr.shift();
console.log(arr);
`;

export const shiftExampleOutput = `[1, 8]`;

export const sliceExample = `let arr = [5, 1, 8];
let slicedArr = arr.slice(1);
console.log(arr);
`;

export const sliceExampleOutput = `[1, 8]`;

export const includesExample = `let arr = [5, 1, 8];
console.log(arr.includes(1));
`;

export const includesExampleOutput = `true`;

export const indexOfExample = `let arr = [5, 1, 8];
console.log(arr.indexOf(5));
`;

export const indexOfExampleOutput = `0`;

export const lastIndexOfExample = `let arr = [5, 1, 8];
console.log(arr.lastIndexOf(5));
`;

export const lastIndexOfExampleOutput = `0`;

export const findExample = `let arr = [5, 1, 8];
let isTiny = (el) => el < 2;
console.log(arr.find(isTiny));
`;

export const findExampleOutput = `1`;

export const findIndexExample = `let arr = [5, 1, 8];
let isBig = (el) => el > 6;
console.log(arr.findIndex(isBig));
`;

export const findIndexExampleOutput = `2`;

export const reduceExample = `let arr = [5, 1, 8];
let reducer = (a, b) => a + b;
console.log(arr.reduce(reducer));
`;

export const reduceExampleOutput = `14`;

export const reduceRightExample = `let arr = [5, 1, 8];
[arr, [0, 1]].reduceRight((a, b) => {
  return a.concat(b)
}, [])`;

export const reduceRightExampleOutput = `[0, 1, 5, 1, 8]`;

export const filterExample = `let arr = [5, 1, 8];
let filtered = arr.filter(el => el > 4);
console.log(filtered);
`;

export const filterExampleOutput = `[5, 8]`;

export const everyExample = `let arr = [5, 1, 8];
let isSmall = (el) => el < 10;
console.log(arr.every(isSmall));
`;

export const everyExampleOutput = `true`;

export const someExample = `let arr = [5, 1, 8];
let biggerThan4 = (el) => el > 4;
console.log(arr.some(biggerThan4));
`;

export const someExampleOutput = `true`;

export const forEachExample = `let arr = [5, 1, 8];
arr.forEach((element) => {
  console.log(element)
});`;

export const forEachExampleOutput = `5
1
8`;

export const mapExample = `let arr = [5, 1, 8];
let map = arr.map(x => x + 1);
console.log(map);`;

export const mapExampleOutput = `[6, 2, 9]`;

export const entriesExample = `let arr = [5, 1, 8];
let iterator = arr.entries();
console.log(iterator.next().value);`;

export const entriesExampleOutput = `[0, 5]
// the 0 is the index,
// the 5 is the first number`;

export const joinExample = `let arr = [5, 1, 8];
console.log(arr.join());`;

export const joinExampleOutput = `"5,1,8"`;

export const toStringExample = `let arr = [5, 1, 8];
console.log(arr.toString());`;

export const toStringExampleOutput = `"5,1,8"`;

export const toLocaleStringExample = `let arr = [5, 1, 8];
let date = [new Date()];
const arrString = arr.toLocaleString();
const dateString = date.toLocaleString();
console.log(arrString, dateString);`;

export const toLocaleStringExampleOutput = `"5,1,8 04/05/2023, 6:54:49 PM"`;

export const reverseExample = `let arr = [5, 1, 8];
arr.reverse();
console.log(arr);`;

export const reverseExampleOutput = `[8, 1, 5]`;

export const sortExample = `let arr = [5, 1, 8];
arr.sort();
console.log(arr);`;

export const sortExampleOutput = `[1, 5, 8]`;

export const lengthExample = `let arr = [5, 1, 8];
console.log(arr.length);`;

export const lengthExampleOutput = `3`;

export const fillExample = `let arr = [5, 1, 8];
arr.fill(2);
console.log(arr);`;

export const fillExampleOutput = `[2, 2, 2]`;

export const copyWithinExample = `let arr = [5, 1, 8];
arr.copyWithin(1);
console.log(arr);`;

export const copyWithinExampleOutput = `[5, 5, 1]`;

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
console.log(arr);
`;

export const includesExampleOutput = `true`;

export const indexOfExample = `let arr = [5, 1, 8];
console.log(arr);
`;

export const indexOfExampleOutput = `0`;

export const lastIndexOfExample = `let arr = [5, 1, 8];
console.log(arr);
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
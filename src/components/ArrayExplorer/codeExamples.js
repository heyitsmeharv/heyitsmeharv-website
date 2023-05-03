export const spliceExample = `let arr = [5, 1, 8];
arr.splice(2, 0, 'tacos');
console.log(arr);`;

export const spliceExampleOutput = `[5, 1, 'tacos', 8]`;

export const pushExample = `let arr = [5, 1, 8];
arr.push(2);
console.log(arr);`;

export const pushExampleOutput = `[5, 1, 'tacos', 8]`;

export const unshiftExample = `let arr = [5, 1, 8];
arr.unshift(2, 7);
console.log(arr);`;

export const unshiftExampleOutput = `[2, 7, 5, 1, 8]`;

export const concatExample = `let arr = [5, 1, 8];
let arr2 = ['a', 'b', 'c'];
let arr3 = arr.concat(arr2);
console.log(arr3);`

export const concatExampleOutput = `[5, 1, 8, 'a', 'b', 'c']`;
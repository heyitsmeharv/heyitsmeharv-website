export const spliceExample = `let arr = [5, 1, 8];
arr.splice(2, 0, 'tacos');
`;

export const spliceExampleOutput = `[5, 1, 'tacos', 8]`;

export const spliceSecondExample = `let arr = [5, 1, 8];
arr.splice(2, 1);
`;

export const spliceSecondExampleOutput = `[5, 1]`;

export const pushExample = `let arr = [5, 1, 8];
arr.push(2);
`;

export const pushExampleOutput = `[5, 1, 'tacos', 8]`;

export const unshiftExample = `let arr = [5, 1, 8];
arr.unshift(2, 7);
`;

export const unshiftExampleOutput = `[2, 7, 5, 1, 8]`;

export const concatExample = `let arr = [5, 1, 8];
let arr2 = ['a', 'b', 'c'];
let arr3 = arr.concat(arr2);
`;

export const concatExampleOutput = `[5, 1, 8, 'a', 'b', 'c']`;

export const popExample = `let arr = [5, 1, 8];
arr.pop();
`;

export const popExampleOutput = `[5, 1]`;

export const shiftExample = `let arr = [5, 1, 8];
arr.shift();
`;

export const shiftExampleOutput = `[1, 8]`;

export const sliceExample = `let arr = [5, 1, 8];
let slicedArr = arr.slice(1);
`;

export const sliceExampleOutput = `[1, 8]`;
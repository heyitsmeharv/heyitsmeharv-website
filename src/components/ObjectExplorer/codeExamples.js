export const createExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

const obj2 = Object.create(obj);
console.log(obj2);`;

export const createExampleOutput = `Object {
  a: 1,
  b: 2,
  c: 3
}`;

export const assignExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

const copy = Object.assign({}, obj);
console.log(copy);`;

export const assignExampleOutput = `Object {
  a:1,
  b:2,
  c:3
}`;

export const definePropertyExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.defineProperty(obj, 'd', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4
});

console.log(obj.d);`;

export const definePropertyExampleOutput = `4`;

export const definePropertiesExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.defineProperties(obj, {
  d: {
    value: 4,
    writable: true
  },
  e: {
    value: 5,
    writable: true
  }
});

console.log(obj);`;

export const definePropertiesExampleOutput = `{ a: 1, b: 2, c: 3, d: 4, e: 5 }`;

export const isExtensibleExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.isExtensible(obj));
Object.freeze(obj);
console.log(Object.isExtensible(obj));`;

export const isExtensibleExampleOutput = `true
false`;

export const isExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

let obj2 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.is(obj, obj2));
console.log(Object.is(obj, obj));`;

export const isExampleOutput = `false
true`;

export const isFrozenExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.isFrozen(obj));
Object.freeze(obj);
console.log(Object.isFrozen(obj));`;

export const isFrozenExampleOutput = `false
true`;

export const isSealedExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.seal(obj);

console.log(Object.isSealed(obj));`;

export const isSealedExampleOutput = `true`;

export const isPrototypeOfExample = `function Rect() {}

var rect = new Rect();

console.log(Rect.prototype.isPrototypeOf(rect));`;

export const isPrototypeOfExampleOutput = `true`;

export const getOwnPropertyDescriptorExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

const o = Object.getOwnPropertyDescriptor(obj, 'a');

console.log(o);`;

export const getOwnPropertyDescriptorExampleOutput = `Object {
  configurable: true,
  enumerable: true,
  value: 1,
  writable: true
}`;

export const getOwnPropertyDescriptorsExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyDescriptors(obj))`;

export const getOwnPropertyDescriptorsExampleOutput = `Object {
  a: Object {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  },
  b: Object {
    configurable: true,
    enumerable: true,
    value: 2,
    writable: true
  },
  c: Object {
    configurable: true,
    enumerable: true,
    value: 3,
    writable: true
  },
}`;

export const propertyIsEnumerableExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj.propertyIsEnumerable('a'));
console.log(Math.propertyIsEnumerable('random'));`;

export const propertyIsEnumerableExampleOutput = `true
false`;

export const hasOwnPropertyExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj.hasOwnProperty('a'));
delete obj.a;
console.log(obj.hasOwnProperty('a'));`;

export const hasOwnPropertyExampleOutput = `true
false`;

export const keysExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj));`;

export const keysExampleOutput = `["a", "b", "c"]`;

export const valuesExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.values(obj));`;

export const valuesExampleOutput = `[1, 2, 3]`;

export const entriesExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.entries(obj));`;

export const entriesExampleOutput = `[["a", 1], ["b", 2], ["c", 3]]`;

export const getOwnPropertyNamesExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.defineProperty(obj, 'a', {
  enumerable: false
});

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));`;

export const getOwnPropertyNamesExampleOutput = `["b", "c"]
["a", "b", "c"]`;

export const sealExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.seal(obj);
delete obj.c;

console.log(obj);`;

export const sealExampleOutput = `{ a: 1, b: 2, c: 3 } // obj.c doesn't get deleted`;

export const freezeExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.freeze(obj);
obj.a = 10;

console.log(obj.a);`;

export const freezeExampleOutput = `1 // the value didn't update to 10`;

export const preventExtensionsExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

Object.preventExtensions(obj);
obj.d = 4;

console.log(obj.d);`;

export const preventExtensionsExampleOutput = `undefined`;

export const toStringExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj.toString());
console.log(obj.a.toString());`;

export const toStringExampleOutput = `"[object Object]"
"1"`;

export const toLocaleStringExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

obj.d = new Date();

console.log(obj.d);
console.log(obj.d.toLocaleString());`;

export const toLocaleStringExampleOutput = `Thu Apr 05 2017 20:57:35 GMT-0700 (MST)
04/05/2023, 8:57:35 PM`;

export const getPrototypeOfExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

const proto = Object.create(obj);
console.log(Object.getPrototypeOf(proto) === obj);`;

export const getPrototypeOfExampleOutput = `true`;

export const setPrototypeOfExample = `let obj = {
  a: 1,
  b: 2,
  c: 3
};

const dict = Object.setPrototypeOf({}, obj);

console.log(dict);`;

export const setPrototypeOfExampleOutput = `Object {
  a: 1,
  b: 2,
  c: 3
}`;
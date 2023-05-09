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
export const forEachExample = `const items = ["item1", "item2", "item3"];
const copyItems = [];

for (let i = 0; i < item.length; i++) {
  copyItems.push(items[i]);
}

items.forEach(item => {
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

export const objects = `console.log(typeof({})); // object
console.log(typeof([])); // object
console.log(typeof(new Date())); // object
console.log(typeof(/\d+/)); // object
console.log(typeof(Math)); // object
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

export const createReactAppCommand = `npx create-react-app text-based-adventure`;

export const mapGeneration = `import { Rooms } from './rooms';
import { Items } from './items';
import { Enemies } from './enemies';

// used for generating the map and placing items randomly in rooms.
export const generateRooms = randomChance => {
  const rooms = [
    {
      id: 0,
      room: 'Start',
      description: 'This is the starting room',
      items: [],
      enemies: [],
      locked: false
    }
  ];
  const listOfPotentialRooms = Rooms;
  const items = Items;
  const enemies = Enemies;

  // let's loop through all of the rooms available
  for (let i = 0; i < listOfPotentialRooms.length; i++) {

    // we want to keep randomly selecting a room which hasn't been added yet
    let randomRoom = listOfPotentialRooms[Math.floor(Math.random() * listOfPotentialRooms.length)];

    // we don't want duplicate rooms added, so let's check to see if it's already been added
    if (!rooms.some(e => e.room === randomRoom.room)) {
      // randomRoom = Rooms[Math.floor(Math.random() * Rooms.length)];

      // make the room object we want to add
      const room = {
        id: i + 1,
        room: '$randomRoom.room',
        description: '$randomRoom.description',
        items: [],
        enemies: [],
        locked: randomRoom.locked
      };

      // Add random items to the room.
      const randomItem = Math.floor(Math.random() * 3);
      const itemSpawnChance = randomChance(0.5);
      for (let x = 0; x < items.length; x++) {
        if (itemSpawnChance) {
          if (!room.items.includes(items[randomItem])) {
            room.items.push(items[randomItem]);
          }
        }
      }

      // Add enemies to the room
      const randomEnemy = Math.floor(Math.random() * 3);
      const enemiesSpawnChance = randomChance(0.2);
      for (let x = 0; x < enemies.length; x++) {
        if (enemiesSpawnChance) {
          if (!room.enemies.includes(enemies[randomEnemy])) {
            room.enemies.push(enemies[randomEnemy]);
          }
        }
      }

      rooms.push(room);
    } else {
      // find a room that doesn't exist;
      let room;

      // loop through the whole array
      for (let x = 0; x < listOfPotentialRooms.length; x++) {
        // let's try and find a room that doesn't exist in the array
        if (!rooms.some(e => e.room === listOfPotentialRooms[x].room)) {
          // we've found it!
          room = listOfPotentialRooms[x];
          // let's add an id (make sure it's not already assigned by adding it to the end of the array)
          room.id = rooms[rooms.length - 1].id + 1;
          // select a random item
          const randomItem = Math.floor(Math.random() * 3);
          // add random items to the room (implement a spawn chance).
          const itemSpawnChance = randomChance(0.5);
          for (let x = 0; x < items.length; x++) {
            if (itemSpawnChance) {
              // we don't want to place duplicate items into the room
              if (!room.items.includes(items[randomItem])) {
                room.items.push(items[randomItem]);
              }
            }
          }
          // Add enemies to the room
          const randomEnemy = Math.floor(Math.random() * 3);
          const enemiesSpawnChance = randomChance(0.2);
          for (let x = 0; x < enemies.length; x++) {
            if (enemiesSpawnChance) {
              if (!room.enemies.includes(enemies[randomEnemy])) {
                room.enemies.push(enemies[randomEnemy]);
              }
            }
          }
          rooms.push(room);
        }
      }
    }
  }

  // add in the end room
  const end = {
    id: rooms[rooms.length - 1].id + 1,
    room: 'End',
    description: 'This is the end room',
    items: [],
    enemies: [],
    locked: false
  }

  rooms.push(end);

  return rooms;
};`;
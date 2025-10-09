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
      name: "Start",
      description: "This is the starting room",
      items: [],
      enemies: [],
      locked: false,
      explored: false
    }
  ];

  const listOfPotentialRooms = Rooms;
  const items = Items;
  const enemies = Enemies;

  // probably re-work the flags () at some point
  // for now let's map through and reset them
  listOfPotentialRooms.forEach(room => room.explored = false);
  items.forEach(item => item.taken = false);
  enemies.forEach(enemy => {
    enemy.killed = false
    enemy.stats.health = enemy.stats.maxHealth;
  });

  // let's loop through all of the rooms available
  for (let i = 0; i < listOfPotentialRooms.length; i++) {

    // we want to keep randomly selecting a room which hasn't been added yet
    let randomRoom = listOfPotentialRooms[Math.floor(Math.random() * listOfPotentialRooms.length)];

    // we don't want duplicate rooms added, so let's check to see if it's already been added
    if (!rooms.some(e => e.name === randomRoom.name)) {
      // randomRoom = Rooms[Math.floor(Math.random() * Rooms.length)];

      // make the room object we want to add
      const room = {
        id: i + 1,
        name: randomRoom.name,
        description: randomRoom.description,
        items: [],
        enemies: [],
        locked: randomRoom.locked,
        explored: false
      };

      // Add random items to the room.
      const randomItem = items[Math.floor(Math.random() * 21)];
      const itemSpawnChance = randomChance(0.5);

      // check to see if the item has already been added to the game
      // unless it's a consumable or usable
      for (let x = 0; x < items.length; x++) {
        const itemAlreadyExists = rooms.some(r => {
          return r[x]?.items.includes(randomItem);
        });
        if (!itemAlreadyExists) {
          if (itemSpawnChance) {
            if (!room.items.includes(randomItem)) {
              room.items.push(randomItem);
            }
          }
        }
      }

      // Add enemies to the room
      const randomEnemy = enemies[Math.floor(Math.random() * 7)];
      const enemiesSpawnChance = randomChance(0.2);
      for (let x = 0; x < enemies.length; x++) {
        if (enemiesSpawnChance) {
          if (!room.enemies.includes(randomEnemy)) {
            room.enemies.push(randomEnemy);
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
        if (!rooms.some(e => e.name === listOfPotentialRooms[x].name)) {
          // we've found it!
          room = listOfPotentialRooms[x];
          // let's add an id (make sure it's not already assigned by adding it to the end of the array)
          room.id = rooms[rooms.length - 1].id + 1;
          // select a random item
          const randomItem = items[Math.floor(Math.random() * 21)];
          // add random items to the room (implement a spawn chance).
          const itemSpawnChance = randomChance(0.5);
          for (let x = 0; x < items.length; x++) {
            const itemAlreadyExists = rooms.some(r => {
              return r[x]?.items.includes(randomItem);
            });
            if (!itemAlreadyExists) {
              if (itemSpawnChance) {
                // we don't want to place duplicate items into the room
                if (!room.items.includes(randomItem)) {
                  room.items.push(randomItem);
                }
              }
            }
          }
          // Add enemies to the room
          const randomEnemy = enemies[Math.floor(Math.random() * 7)];
          const enemiesSpawnChance = randomChance(0.2);
          for (let x = 0; x < enemies.length; x++) {
            if (enemiesSpawnChance) {
              if (!room.enemies.includes(randomEnemy)) {
                room.enemies.push(randomEnemy);
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
    name: "End",
    description: "This is the end room",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  }

  rooms.push(end);
  return rooms;
};`;

export const roomHelper = `export const Rooms = [
  {
    name: "Torture Chamber",
    description: "This room is filled with gruesome instruments of pain and suffering, including spiked chairs, iron.",
    items: [],
    enemies: [],
    locked: false,
    explored: false,
  },
  {
    name: "Guard Room",
    description: "This room is where the guards stationed in the dungeon rest and eat. There are cots and hammocks for sleeping, and tables and benches for eating.",
    items: [],
    enemies: [],
    locked: false,
    explored: false,
  },
  {
    name: "Holding Cells",
    description: "These small cells are used to hold prisoners awaiting trial or punishment. They are dark, cramped, and have a foul smell.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Execution Chamber",
    description: "This room is where prisoners are brought to be executed. There is a trapdoor in the floor, a noose hanging from the ceiling, and a chopping block.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Alchemy Lab",
    description: "This room is where the dungeon's alchemist conducts experiments and brews potions. There are cauldrons, alembics, and retorts scattered around the room.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Armory",
    description: "This room is where the dungeon's weapons and armor are stored. There are racks of swords, spears, and shields, as well as suits of armor and crossbows.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Treasure Vault",
    description: "This room is where the dungeon's most valuable treasures are kept. There are piles of gold and silver coins, precious jewels, and ornate chests.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Torture Garden",
    description: "This outdoor space is used for outdoor punishments, such as flogging, whipping, and other forms of physical torture. There are posts and stakes set up for this purpose.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Crypt",
    description: "This underground chamber is used for waste disposal. It is filled with rats, cockroaches, and other vermin.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Sewer",
    description: "This underground chamber is used for waste disposal. It is filled with rats, cockroaches, and other vermin.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Training Room",
    description: "This room is where the dungeon's guards train and practice their combat skills. There are dummies, targets, and other equipment for this purpose.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Interrogation Room",
    description: "This room is used to extract information from prisoners. There are tables, chairs, and instruments of torture.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Throne Room:",
    description: "This room is where the dungeon's ruler sits on their throne. There are banners, tapestries, and other decorations on the walls.",
    items: [],
    enemies: [],
    locked: true,
    explored: false
  },
  {
    name: "Library",
    description: "This room is where the dungeon's records and books are kept. There are shelves filled with books, scrolls, and maps.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Barracks",
    description: "This room is where the dungeon's guards sleep and eat. There are bunk beds, tables, and benches.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Courtroom",
    description: "This room is where trials are held. There is a judge's bench, a jury box, and seating for spectators.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
  {
    name: "Guard Tower",
    description: "This tall tower overlooks the surrounding area. Guards stationed here can watch for intruders or potential escapes.",
    items: [],
    enemies: [],
    locked: false,
    explored: false
  },
]`

export const partitionsInAthena = `CREATE EXTERNAL TABLE sales (
  product_id STRING,
  amount DOUBLE
)
PARTITIONED BY (year STRING, month STRING)
STORED AS PARQUET
LOCATION 's3://my-bucket/sales/';
`;

export const columnarFormat = `CREATE TABLE sales_parquet
STORED AS PARQUET
AS SELECT * FROM sales;
`;

export const SSMLExample = `<speak>
Hello, <emphasis level="strong">world!</emphasis>
Welcome to <break time="1s"/> Amazon Polly.
</speak>
`;

export const cloudwatchlogsInsights = `fields @timestamp, @message
| filter @message like /error/
| sort @timestamp desc
| limit 20
`;

export const cloudwatchlogsAlarmStatus = `aws cloudwatch set-alarm-state 
--alarm-name "myalarm" 
--state-value ALARM 
--state-reason "testing purposes"
`;

export const bashEnvironment = `echo $SHELL`;
export const powershell = `$PSVersionTable`;
export const bashVersion = `bash --version`;
export const bashOutput = `ls > files.txt`;
export const bashAppend = `echo "new line" >> files.txt`;
export const bashPipe = `ls /etc | grep conf`;
export const bashFirstScript = `#!/bin/bash
# A simple hello world script

echo "Hello, world!"`;
export const bashFirstScript2 = `chmod +x hello.sh`;
export const bashFirstScript3 = `./hello.sh`;
export const bashFirstScript4 = `Hello, world!`;
export const pythonScript = `#!/usr/bin/python3`;

export const bashProjectSetup = `my_project/
├── src/
├── logs/
├── data/
└── README.md`;
export const bashProjectSetup2 = `#!/bin/bash

mkdir -p my_project/{src,logs,data}
touch my_project/README.md
echo "Project folder created successfully."`;
export const bashProjectSetup3 = `chmod +x setup_project.sh`;
export const bashProjectSetup4 = `./setup_project.sh`;
export const bashUserInput = `#!/bin/bash

name="Adam"
echo "Hello, $name!"

read -p "Enter your favourite language: " lang
echo "You love $lang!"
`;
export const bashCommandSubstitution = `today=$(date)
echo "Today is $today"`;
export const bashPassingArguments = `#!/bin/bash

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Total arguments: $#"
`;
export const bashPassingArguments2 = `./args.sh apple banana`;
export const bashPassingArguments3 = `Script name: ./args.sh
First argument: apple
Second argument: banana
Total arguments: 2
`;
export const bashSystemInfo = `#!/bin/bash

echo "System Report for: $(hostname)"
echo "User: $(whoami)"
echo "Memory usage:"
systeminfo | grep "Total Physical Memory"
echo "Disk usage:"
df -h`;
export const bashSystemInfo2 = `chmod +x sysinfo.sh
./sysinfo.sh`;
export const bashSystemInfo3 = `System Report for: dev-machine
User: adam
Memory usage:
Total Physical Memory: 16,298 MB
Disk usage: 
Filesystem            Size  Used Avail Use% Mounted on
D:/Program Files/Git  932G  251G  682G  27%    /
C:                    465G  334G  131G  72%    /c`;

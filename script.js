//Program Structure
console.log("Program Structure - Question 1");

//Question 1
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

console.log("Program Structure - Question 2");
//Question 2
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) { 
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

console.log("Function Assignment - Question 1");
//Function Assignment
//Question 1
function min(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Please enter a number";
    } else {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
}

console.log(min(2, 3));
console.log(min(3, 2));
console.log(min(3, 3));
console.log(min("a", 3));

console.log("Function Assignment - Question 2");
//Question 2
function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-10));
console.log(isEven(-15));
console.log(isEven(0));

console.log("Function Assignment - Question 3");
//Question 3
function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count++;
        }
    }
    return count;
}

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("AaBbCcBbBb"));
console.log(countChar("Kapilkapil", "k"));


console.log("Data Structures: Objects and Arrays - Question 1");
//Data Structures: Objects and Arrays
//Question 1

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function rangeStep(start, end, step) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(rangeStep(1, 10, 2));
console.log(rangeStep(5, 2, -1));
console.log(rangeStep(5, -10, -2));

console.log("Data Structures: Objects and Arrays - Question 2");
//Question 2
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return {
        value,
        rest: list
    };
}

function nth(list, n) {
    if (!list) {
        return undefined;
    } else if (n == 0) {
        return list.value;
    } else {
        return nth(list.rest, n - 1);
    }
}

console.log("Array to List", arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

console.log("Data Structures: Objects and Arrays - Question 3");
//Question 3
function reverseArray(array) {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        array2.unshift(array[i]);
    }
    return array2;
}

function reverseArrayInPlace(array) {    
    for (let i = 0; i < Math.floor(array.length / 2); i++) {        
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log("Reverse Array in Place", arrayValue);

console.log("Data Structures: Objects and Arrays - Question 4");
//Question 4
function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    if (value1 == null || typeof value1 != "object" || value2 == null || typeof value2 != "object") {
        return false;
    }
    let keys1 = Object.keys(value1),
        keys2 = Object.keys(value2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }
    return true;
}

console.log("Checking string one", deepEqual("Kapil", "Kapil"));
console.log("Checking string two", deepEqual("Kapil", "Thapa"));
console.log("Checking number one", deepEqual(5, 5));
console.log("Checking number two", deepEqual(5, 7));
let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log("Checking object one", deepEqual(obj, obj));
console.log("Checking object two", deepEqual(obj, {
    here: 1,
    object: 2
}));
console.log("Checking object three", deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));

console.log("Higher Order Functions - Question 1");
//Higher Order Functions
//Question 1
function flatten(array) {
    return array.reduce((a, b) => {
        if (Array.isArray(b)) {
            return a.concat(flatten(b));
        } else {
            return a.concat([b]);
        }
    }, []);
}

console.log(flatten([  [1, 2, 3], [4, 5], [6]  ]));
console.log(flatten([  [1, 2, 3], [4, 5], [6, 7, 8, 9]  ]));
a = ['1', '2', ['3', ['4']]];

console.log(flatten(a)); // returns ["1, "2", "3", "4"]

console.log("Higher Order Functions - Question 2");
//Question 2
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
console.log("another loop");
loop(0, i=>i<=10, i=>++i, console.log);

console.log("Higher Order Functions - Question 3");
//Question 3
function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {
    return !array.some(element => !test(element));
}

console.log("True", every([1,2,3,4,5], x=>x<10)) // returns true
console.log("False", every([6,7,8,9,10], x=>x<10)) // returns false

console.log(every([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(everySome([1, 3, 5], n => n < 10));

console.log("True", everySome([1,2,3,4,5], x=>x<10)) // returns true
console.log("False", everySome([6,7,8,9,10], x=>x<10)) // returns false

console.log("Higher Order Functions - Question 4");
//Question 4
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  // takes a test function and tells you whether that function
  // returns true for any of the elements in the array
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  // returns an array of objects, each of which names a group
  // and tells you the number of elements that were found in that group

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    if (scripts.length == 0) {
        return "ltr";
    }
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}

// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("Hey, مساء الخير"));

console.log("Object - Question 1");
//Object
//Question 1
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }
    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


console.log("Object - Question 2");
//Question 2
class Group {
    constructor() {
        this.group = [];
    }
    add(value) {
        if (!this.group.includes(value)) {
            this.group.push(value);
        }
    }
    delete(value) {
        this.group = this.group.filter(v => v !== value);
    }
    has(value) {
        return this.group.includes(value);
    }
    static from(array) {
        let group = new Group;
        for (let value of array) {
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

let grp = Group.from([10, 20]);
console.log(grp.has(10));
// → true
console.log(grp.has(30));
// → false
grp.add(10);
grp.delete(10);
console.log(grp.has(10));
// → false

console.log("Object - Question 3");
//Question 3
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }
    next() {

        if (this.position >= this.group.group.length) {
            return {done: true};
        } else {
            let result = {value: this.group.group[this.position], done: false};
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

console.log("Object - Question 4");
//Question 4
function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
}

let map = {one: true, two: true, hasOwnProperty: true};
console.log(has(map, "one"));
console.log(has(map, "three"));
console.log(has(map, "hasOwnProperty"));

console.log("Bugs and Error - Question 1");
//Bugs and Error
//Question 1
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64



function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) {
        return null;

    } else {
        return result;

    }
}

console.log("Bugs and Error - Question 2");
//Question 2
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
};
  
function withBoxUnlocked(body) {
    let boxLockedOnEntry = box.locked;
    if (boxLockedOnEntry) {
        box.unlock();
    }
    try {
        body();
    } finally {
        if (boxLockedOnEntry) {
        box.lock();
        }
    }
}
  
// try with the box locked
withBoxUnlocked(function() {
    box.content.push("gold piece");
});
  
// check that box is still locked after adding gold piece
console.log(box.locked);
// → true
  
// try with locked box that raises error once opened
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
    } catch (e) {
    console.log("Error raised:", e);
}

// check that box is still locked after error
console.log(box.locked);
// → true

// unlock the box
box.unlock();
// add silver piece to box that is unlocked
withBoxUnlocked(function() {
    box.content.push("silver piece");
});

// check that box is still unlocked after adding silver piece
console.log(box.locked);
// → flase

// raise error on unlocked box
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
    } catch (e) {
    console.log("Error raised:", e);
}

// check that box is still unlocked after error
console.log(box.locked);
// → false

console.log("Regular Expressions - Question 1");
//Regular Expressions
//Question 1
// the letters 'ca' followed by one of 'r' or 't'
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// 'p' optionally followed by 'r' followed by 'op'
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

// 'ferr' followed by 'et' or 'y' or 'ari'
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// 'ious' followed by a word boundary 
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// a whitespace character followed by one of '.' or ',' or ':'or ';' 
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

// 7 or more word characters grouped together
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

// one or more words not containing an e
verify(/\b[^\We]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

let re = /\b[^\We]+\b/;
console.log("red platypus".match(re));
console.log("wobbling nest".match(re));
console.log("earth bed".match(re));
console.log("learning ape".match(re));

console.log("Regular Expressions - Question 2");
//Question 2
let number = /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}

console.log("Asynchronous Programming - Question 1");
// Asynchronous Programming
//Question 1
async function locateScalpel(nest) {
    let current = nest.name;
    for (;;) {
      let next = await anyStorage(nest, current, "scalpel");
      if (next == current)
        return current;
      current = next;
    }
}
  
function locateScalpel2(nest) {
    function loop(current) {
        return anyStorage(nest, current, "scalpel").then(next => {
        if (next == current) 
            return current;
        else
            return loop(next);
        });
    }
    return loop(nest.name);
}
  
locateScalpel(bigOak).then(console.log);
// → Butcher Shop

locateScalpel2(bigOak).then(console.log);
// → Butcher Shop

console.log("Asynchronous Programming - Question 1");
//Question 2
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let pending = promises.length;
      
      // Array of Promises
      for (let i = 0; i < promises.length; ++i) {
        promises[i].then(result => {
          results[i] = result;
          --pending;
          if (pending == 0)
            resolve(results);
        }).catch(reject);
      }
    
      // `promises` is Empty.
      if (promises.length == 0)
        resolve(results);
    });
  }
  
  // Test code.
  Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  });
  Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
      console.log("We should not get here");
    })
    .catch(error => {
      if (error != "X") {
        console.log("Unexpected failure:", error);
      }
    });

console.log("DOM - Question 1");
//DOM
//Question 1
console.log("DOM - Question 1: Solution in index.html");
// const MOUNTAINS = [
//     {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
//     {name: "Everest", height: 8848, place: "Nepal"},
//     {name: "Mount Fuji", height: 3776, place: "Japan"},
//     {name: "Vaalserberg", height: 323, place: "Netherlands"},
//     {name: "Denali", height: 6168, place: "United States"},
//     {name: "Popocatepetl", height: 5465, place: "Mexico"},
//     {name: "Mont Blanc", height: 4808, place: "Italy/France"}
//   ];

// (function createMountainTable() {
//     let table_html = "<table>\n";

//     table_html += "\t<tr>\n";

//     for (let key of Object.keys(MOUNTAINS[0])) {
//         table_html += `
//             <th>${key}</th>
//         `;
//     }

//     for (let mountain of MOUNTAINS) {
//         table_html += `
//             <tr>
//                 <th>${mountain.name}</th>
//                 <th style="text-align: right">${mountain.height}</th>
//                 <th>${mountain.place}</th>
//             </tr>
//         `;
//     }

//     table_html += "</table>\n";

//     document.getElementById("mountains").innerHTML = table_html;
// })();

console.log("DOM - Question 2");
//Question 2
console.log("DOM - Question 2: Solution in index.html");
{/* <p>🎈</p>

<script>
    const maximumPossibleSize = 50;
  
    let balloon = document.querySelector("p");
    let originalFontSize = 15;
    balloon.style.fontSize = originalFontSize + "px";
  
    function growBalloon() {    
        originalFontSize += originalFontSize * 0.1;

        if (originalFontSize > maximumPossibleSize) {
            balloon.textContent = "💥";
            window.removeEventListener("keydown", changeBalloon);
        }
        else {
            balloon.style.fontSize = originalFontSize + "px";
        }
    }

    function shrinkBalloon() {
        originalFontSize -= originalFontSize * 0.1;
        balloon.style.fontSize = originalFontSize + "px";
    }

    function changeBalloon(event) {
        if (event.key === "ArrowUp") {
            growBalloon();
            event.preventDefault();  // To prevent scrolling of browser window
        }
        else if (event.key === "ArrowDown") {
            shrinkBalloon();
            event.preventDefault();  // To prevent scrolling of browser window
        }
    }

    window.addEventListener("keydown", changeBalloon);
</script> */}
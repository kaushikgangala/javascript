// Objects in JS can be singleton or multiton
// to create a singleton object, you use Object.create() function

const mySym = Symbol("sym1");

// multiton object
const myObj = {
  userName: "Kaushik",
  "Full Name": "Kaushik Gangala", // must be accessed using [] and not .
  userEmail: "Kaushik@google.com",
  [mySym]: "Symbol value",
};

myObj.userName;
// myObj[userName] -> error, keys are converted into strings
myObj["userName"];

// console.log(myObj.mySym); O/P:  undefined
console.log(myObj[mySym]); // O/P: Symbol value

// adding properties
myObj.greeting = function () {
  console.log(`Hello, ${this.userName}`);
};

// calling greeting function
myObj.greeting();

// to make object immutable
Object.freeze(myObj);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// the last object with conflicting key will override
const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj2, ...obj1 };
// const obj3 = Object.assign({}, obj1, obj2), does same thing
// const obj3 = Object.assign(obj1, obj2), modifies obj1

console.log(obj3); // {a: 1, b: 3, c: 4}
console.log(obj4); // {b: 2, c: 4, a: 1}

console.log(Object.keys(obj1)); // returns array of keys
console.log(Object.values(obj1)); // returns array of values
console.log(Object.entries(obj1)); // returns 2d array of [key, value]

console.log(obj1.hasOwnProperty("a")); // checks if given object has given key

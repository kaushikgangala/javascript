const myArr = new Array(1, 2, 3, 4, 5, [6, 7, [8, 9, [10]]]);

// operations
//      .push(value), .pop() -> adds and removes at the end
//      .unshift(value), .shift() -> adds and removes at the start

//      .slice(startIndex, endIndex) -> end index is excluded
//      .splice(startIndex, rangeIncludingStartIndex) -> modifies the original array

//      .includes(value), returns true/false
//      .indexOf(value), returns index

const newArr1 = Array.from("Kaushik"); // ['K', 'a', 'u', 's', 'h', 'i', 'k']

const newArr2 = Array.from({ 1: "1" }); // []

const score1 = 100;
const score2 = 200;
const score3 = 300;

const newArr3 = Array.of(score1, score2, score3); // [100, 200, 300]

// myA.flat(depth) -> flattens to the given depth and returns new array, can use Infinity for all the depths

// .forEach(()=>{}) ->
// .reduce(()=>{}) -> returns new array

const sArr = myArr.flatMap((val) => {
  return val ** 2;
});
console.log(sArr);

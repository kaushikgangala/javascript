// Implicit Type Conversion (Coercion):
console.log("11" + 2, typeof ("11" + 2)); // 112, string
console.log(1 + "12", typeof (1 + "12")); // 112, string
console.log("1" - 2); // -1, number
console.log(1 - "2"); // -1, number

// Truthy and Falsy Values:
// 0 -> Falsy, 1 -> Truthy

// Type Conversion Functions: parseInt(), parseFloat(), String()
console.log(parseInt("10")); // 10, number
console.log(parseInt("10px")); // 10, number
console.log(parseInt("abc")); // NaN

// parseInt/parseFloat with base
console.log(parseInt("100", 2)); // 4, base 2
console.log(parseFloat("100", 8)); // 64, base 2
console.log(parseInt("100", 16)); // 256, base 16

// unary plus operator:
console.log(+"10"); // 10, number

// Object to Primitive Conversion:
const obj = {
  // should have either valueOf() or toString() function
  // for object to primitive conversion
  toString() {
    return "42";
  },
};

console.log(obj + 1);

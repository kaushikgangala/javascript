// automatic conversion in comparisons:
console.log("10" == 10); // true, number == number
console.log(10 == "10"); // true, number == number
console.log(10 === "10"); // false
console.log(10 >= "10"); // true

// equality check doesn't convert null to 0
console.log(null == 0); // null == 0, false
// but comparisons do...
console.log(null > 0); // 0 > 0, false
console.log(null >= 0); // 0 >= 0, true

// NOTE: null gets converted to 0, but undefined doesn't

console.log(undefined == 0); // undefined == 0, false
// but comparisons do...
console.log(undefined > 0); // undefined > 0, false
console.log(undefined >= 0); // undefined >= 0, true

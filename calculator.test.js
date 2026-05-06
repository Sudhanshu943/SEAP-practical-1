const { add, subtract, multiply, divide } = require("./calculator");

// add
console.assert(add(2, 3) === 5, "add(2, 3) should be 5");
console.assert(add(-1, 1) === 0, "add(-1, 1) should be 0");

// subtract
console.assert(subtract(10, 4) === 6, "subtract(10, 4) should be 6");
console.assert(subtract(3, 5) === -2, "subtract(3, 5) should be -2");
console.assert(subtract(-1, -3) === 2, "subtract(-1, -3) should be 2");
console.assert(subtract(7, 0) === 7, "subtract(7, 0) should be 7");

// multiply
console.assert(multiply(3, 4) === 12, "multiply(3, 4) should be 12");
console.assert(multiply(5, 0) === 0, "multiply(5, 0) should be 0");
console.assert(multiply(-2, 3) === -6, "multiply(-2, 3) should be -6");
console.assert(multiply(9, 1) === 9, "multiply(9, 1) should be 9");

// divide
console.assert(divide(10, 2) === 5, "divide(10, 2) should be 5");

try {
  divide(1, 0);
  console.assert(false, "divide by zero should throw");
} catch (e) {
  console.assert(
    e.message === "Division by zero is not allowed.",
    "divide by zero should throw with correct message"
  );
}

console.log("All tests passed!");

/**
 * Returns the sum of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of num1 and num2.
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * Returns the difference of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The result of num1 - num2.
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * Returns the product of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The product of num1 and num2.
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/**
 * Returns the quotient of two numbers.
 * @param {number} num1 - The dividend.
 * @param {number} num2 - The divisor.
 * @returns {number} The result of num1 / num2.
 * @throws {Error} If num2 is zero.
 */
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return num1 / num2;
}

module.exports = { add, subtract, multiply, divide };

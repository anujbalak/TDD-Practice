/* eslint-disable no-undef */
import { Calculate } from "./calculate.mjs";
const calculate = new Calculate();
let a = 5;
let b = 9;
let sumString = `${a} + ${b} should be ${a + b}`;
test(sumString, () => {
  expect(calculate.add(a, b)).toBe(a + b);
});

let subtractArray = `${a} - ${b} should be ${a - b}`;
test(subtractArray, () => {
  expect(calculate.subtract(a, b)).toBe(a - b);
});

let multiplyString = `${a} × ${b} should be ${a * b}`;
test(multiplyString, () => {
  expect(calculate.multiply(a, b)).toBe(a * b);
});

let divideArray = `${a} ÷ ${b} should be ${a / b}`;
test(divideArray, () => {
  if (b === 0) throw new Error("An illegal divisor");
  expect(calculate.divide(a, b)).toBe(a / b);
});

let modArray = `${a} ‖ ${b} should be ${a % b}`;
test(modArray, () => {
  if (b === 0) throw new Error("An illegal divisor");
  expect(calculate.mod(a, b)).toBe(a % b);
});

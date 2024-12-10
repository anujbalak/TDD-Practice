/* eslint-disable no-undef */
import { caesarCipher } from "./caesarCipher.mjs";

let string = "Hello, Anuj1234";
let expected = "Khoor, Dqxm1234";
let shiftFactor = 3;
test("Caesar cipher", () => {
  expect(caesarCipher(string, shiftFactor)).toBe(expected);
});

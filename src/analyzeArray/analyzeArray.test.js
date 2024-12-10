/* eslint-disable no-undef */
import { analyzeArry } from "./analyzeArray.mjs";

let array = [3, 5, 2, 6, 9, 0, -4, 5];
class Node {
    constructor() {
      this.average = 3.25;
      this.min = -4;
      this.max = 9;
      this.length = 8;
    }
  }

let prop = new Node();

test(`Will return average, min, max, length of array`, () => {
  expect(analyzeArry(array)).toEqual(prop);
});

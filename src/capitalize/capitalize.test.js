//const capitalize = "./capitalize.mjs"
import { capitalize } from "./capitalize.mjs";

let testString = "Ram got a dog named Mark.";
// eslint-disable-next-line no-undef
test("First letter should be capital", () => {
  function expected() {
    let string = capitalize(testString);
    let stringArray = string.split(" ");
    let resultArray = [];
    stringArray.forEach((word) => {
      let firstLetter = word.charAt(0).toUpperCase();
      let remainLetters = word.slice(1);
      let capitalizeWord = firstLetter + remainLetters;
      resultArray.push(capitalizeWord);
    });
    return resultArray.join(" ");
  }
  // eslint-disable-next-line no-undef
  expect(capitalize(testString)).toBe(expected());
});

let string = capitalize(testString);
console.log(string);

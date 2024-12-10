function reverseString(string) {
  let stringArray = string.split(" ");
  let result = [];
  stringArray.forEach((word) => {
    let reversedWord = "";
    let letterArray = word.split("");
    for (let i = letterArray.length - 1; i >= 0; i--) {
      reversedWord += letterArray[i];
    }
    result.unshift(reversedWord);
  });
  return result.join(" ");
}

export { reverseString };

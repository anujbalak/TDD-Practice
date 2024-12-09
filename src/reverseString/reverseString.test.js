import { reverseString } from "./reverseString.mjs";

let string = 'King gave the order to excute the traitors.'
// eslint-disable-next-line no-undef
test('String should be reversed order', () => {
    function expected() {
        let stringArray = string.split(' ');
        let result = []
        stringArray.forEach(word => {
            let reversedWord = '';
            let letterArray = word.split('');
            for (let i = letterArray.length - 1; i >= 0; i--) {
                reversedWord += letterArray[i];
            }
            result.unshift(reversedWord);
        })
        return result.join(' ');
    }

    // eslint-disable-next-line no-undef
    expect(reverseString(string)).toBe(expected());
})

let str = reverseString(string);
console.log(str)

function caesarCipher(string, shiftFactor) {
    if (shiftFactor > 26) {
        shiftFactor = 0 + (shiftFactor - 26)
    }
    let alphabet = getAlphabet()    
    let result = [];
    let stringArray = string.split('');
    stringArray.forEach(letter => {
        if(checkIfAlphabet(letter)) {
            let smallLetter = letter;
            if (checkIfCapital(letter)) {
                smallLetter = letter.toLowerCase();
            }
            let letterCode = smallLetter.charCodeAt(0);
            let correctCode = getCorrectCode(letterCode + shiftFactor)
            let cipheredLetter = alphabet[correctCode];
            if (checkIfCapital(letter)) {
                cipheredLetter = cipheredLetter.toUpperCase();
            }
            result.push (cipheredLetter);
        } else {
            result.push(letter)
        }
    });
    return result.join('');
}

function getCorrectCode(code) {
    let smallMax = 122;
    if (code > 122) {
        return code = 96 + (code - smallMax);
    }
    return code;
}

function getAlphabet() {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArray = alphabets.split('')
    for (let i = 0; i < 97; i++) {
        alphabetArray.unshift(undefined);
    }
    return alphabetArray;
}

function checkIfAlphabet(letter) {
    let capMin = 65;
    let capMax = 90;
    let smallMin = 97;
    let smallMax = 122;
    let con = letter.charCodeAt(0);
    if (con < capMin || con > capMax && con < smallMin || con > smallMax) return false;

    return true;
}

function checkIfCapital(letter) {
    let capMin = 65;
    let capMax = 90;
    let con = letter.charCodeAt(0);
    if (con >= capMin && con <= capMax) return true;
    
    return false
}
export { caesarCipher };
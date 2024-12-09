function capitalize(string) {
    let stringArray = string.split(' ');
    let result = [];
    stringArray.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let remainLetters = word.slice(1);
        result.push(firstLetter + remainLetters);
    });
    return result.join(' ');
}

export { capitalize }
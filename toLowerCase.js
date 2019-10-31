const alphabetUpperCase = 
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const alphabetLowerCase = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(alphabetUpperCase[1])

const convertToLowerCase = function (myString) {
    lowerCaseString= ""
    for (let i = 0; i < myString.length; i++) {
        for (let i = 0; i < alphabetUpperCase.length; i++) {
            if (myString[i] === alphabetUpperCase[i]) {
                lowerCaseString.concat(alphabetLowerCase[i])
                console.log(alphabetLowerCase[i])
            }
        }
    }
        return lowerCaseString
}

console.log(convertToLowerCase("I AM A BIG ! STRING"))
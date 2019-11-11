const alphabetUpperCase = 
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const alphabetLowerCase = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(alphabetUpperCase[1])

const convertToLowerCase = function (myString) {
    let lowerCaseString = ""
    let matchFound = false
    for (let i = 0; i < myString.length; i++) {
        for (let j = 0; j < alphabetUpperCase.length; j++) {
            if (myString[i] === alphabetUpperCase[j]) {
                lowerCaseString = lowerCaseString.concat(alphabetLowerCase[j])
                matchFound = true
            } else {
                matchFound = false
            }
        }
        if (!matchFound) {
            lowerCaseString = lowerCaseString.concat(myString[i])
        }
    }
        return lowerCaseString
}

console.log(convertToLowerCase("I AM A BIG ! STRING"))

// 1: i = 0
//     j = 0
//         I

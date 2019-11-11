const alphabetUpperCase = 
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const alphabetLowerCase = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// console.log(alphabetUpperCase[1])

const convertToLowerCase = function (myString) {
    let lowerCaseString = ""
<<<<<<< HEAD
    let matchFound = false
    for (let i = 0; i < myString.length; i++) {
=======
    for (let i = 0; i < myString.length; i++) {
        let matchFound = false
>>>>>>> 82ff57b55316f5a0c63ce9c7fc13a1a51a5b7042
        for (let j = 0; j < alphabetUpperCase.length; j++) {
            if (myString[i] === alphabetUpperCase[j]) {
                lowerCaseString = lowerCaseString.concat(alphabetLowerCase[j])
                matchFound = true
<<<<<<< HEAD
            } else {
                matchFound = false
            }
=======
            } 
        }
        if (!matchFound) {
            lowerCaseString = lowerCaseString.concat(myString[i])
>>>>>>> 82ff57b55316f5a0c63ce9c7fc13a1a51a5b7042
        }
        if (!matchFound) {
            lowerCaseString = lowerCaseString.concat(myString[i])
        }
    }
        return lowerCaseString
}

console.log(convertToLowerCase("I AM A BIG ! STRING"))
<<<<<<< HEAD

// 1: i = 0
//     j = 0
//         I
=======
console.log(convertToLowerCase("I AM"))
console.log(convertToLowerCase("STRING"))

// Bonus: use objects instead of 2 arrays
/*
const alpha = {
    A: 'a',
    B: 'b',
    ...
}

alpha[myString[i]]
// alpha['B']
// 'b'

*/

>>>>>>> 82ff57b55316f5a0c63ce9c7fc13a1a51a5b7042

const mainTextAreaElement = document.querySelector('#main-text-area')
const singleCharacterInputElement = document.querySelector('#character-input')
const searchButtonElement = document.querySelector('#search-characters')

let enteredText = undefined
let charCount = 0
let searchChar = undefined
// let occurences = 0

const searchCharOccurences = function (searchChar) {
    let occurences = 0
    for (let i = 0; i < enteredText.length; i++) {
        if (searchChar === enteredText[i]) {
            occurences === occurences++
        }
    }
        return occurences
}

// Main Text Input Area
mainTextAreaElement.addEventListener('input', function(e) {
    enteredText = e.target.value
    charCount = enteredText.length
})


// Single Character Search Input
singleCharacterInputElement.addEventListener('input', function(e) {
    searchChar = e.target.value
})

// Search Characters button
searchButtonElement.addEventListener('click', function(e) {
    if (!searchChar) {
        console.log('No Search Text Entered!')
    } else if (searchChar === " ") {
        console.log(`You are seaching for occurences of spaces`)
    } 
    else {
        console.log(`You are seaching for occurences of: ${searchChar}`)
        console.log(`Number of occurences: ${searchCharOccurences(searchChar)}`)
    }
})
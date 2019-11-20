const mainTextAreaElement = document.querySelector('#main-text-area')
const singleCharacterInputElement = document.querySelector('#character-input')
const searchButtonElement = document.querySelector('#search-characters')

let enteredText = undefined
let charCount = 0
let searchChar = undefined

const searchCharOccurences = function (searchChar) {
    let occurences = 0
    for (let i = 0; i < enteredText.length; i++) {
        if (searchChar === enteredText[i]) {
            occurences++
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
        document.getElementById("results").innerHTML = `<strong>No Search Text Entered...</strong>`
    } else if (searchChar === " ") {
        console.log(`You are seaching for occurences of spaces`)
        document.getElementById("results").innerHTML = `You are seaching for occurences of spaces... <br/>Number of spaces: <strong>${searchCharOccurences(searchChar)}</strong>`
    }
    else {
        //console.log(document.getElementById('main-text-area').value)
        document.getElementById("results").innerHTML = `You are seaching for occurences of: '${searchChar}'<br/>Number of occurences: <strong>${searchCharOccurences(searchChar)}</strong>`
    }
})
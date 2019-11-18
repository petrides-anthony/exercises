const mainTextAreaElement = document.querySelector('#main-text-area')
const singleCharacterInputElement = document.querySelector('#character-input')
const searchButtonElement = document.querySelector('#search-characters')

let searchText = undefined
let enteredChar = undefined
let charCount = 0

// Main Text Input Area
mainTextAreaElement.addEventListener('input', function(e) {
    enteredChar = e.target.value
    charCount = e.target.value.length
    console.log(`Number of characters entered: ${charCount}`)
})


// Single Character Search Input
singleCharacterInputElement.addEventListener('input', function(e) {
    searchText = e.target.value
})

// Search Characters button
searchButtonElement.addEventListener('click', function(e) {
    if (!searchText) {
        console.log('No Search Text Entered!')
    } else if (searchText === " ") {
        console.log(`You are seaching for occurences of spaces.`)
    } 
    else {
        console.log(`You are seaching for occurences of: ${searchText}.`)
    }
})
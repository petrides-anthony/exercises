const mainTextAreaElement = document.querySelector('#main-text-area')
const singleCharacterInputElement = document.querySelector('#character-input')
const searchButtonElement = document.querySelector('#search-characters')


// Main Text Input Area
mainTextAreaElement.addEventListener('input', function(e) {
    enteredText = e.target.value
    console.log(enteredText)
})

// Single Character Search Input
singleCharacterInputElement.addEventListener('input', function(e) {
    enteredText = e.target.value
})

// Search Characters button
searchButtonElement.addEventListener('click', function(e) {
        console.log(`You are seaching for occurences of: ${enteredText}`)
})
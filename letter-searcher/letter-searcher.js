const mainTextAreaElement = document.querySelector('#main-text-area')
const singleCharacterInputElement = document.querySelector('#character-input')
const searchButtonElement = document.querySelector('#search-characters')

const searchCharOccurences = (searchChar) => {
    let occurences = 0
    let textAreaText = document.getElementById('main-text-area').value
    for (let i = 0; i < textAreaText.length; i++) {
        if (searchChar === textAreaText[i]) {
            occurences++
        }
    }
        return occurences
}

// Search Characters button
searchButtonElement.addEventListener('click', (e) => {
    searchChar = document.getElementById('character-input').value
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
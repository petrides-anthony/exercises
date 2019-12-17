const generateMapFromText = (searchText) => {
    let max = 0
    let map = new Map()
    for (let i = 0; i < searchText.length; i++) {
        let currentOccurence = 0;
        if (map.has(searchText[i])) {
            map.set(searchText[i], map.get(searchText[i]) + 1)
            currentOccurence = map.get(searchText[i])
        } else {
            map.set(searchText[i], 1)
            currentOccurence = 1
        }
        if (currentOccurence > max) {
            max = currentOccurence
        }
    }
    return max
}

console.log(generateMapFromText("aabccccd"))
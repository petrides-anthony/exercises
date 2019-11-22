const generateMapFromText = (searchText) => {
    let map = new Map()
    for (let i = 0; i <searchText.length; i++) {
        let count = 1

        if (map.has(searchText[i])) {
            count = count + 1
            map.set(searchText[i], count)
        } else {
        map.set(searchText[i], count)
        }
    }
    return map
}

console.log(generateMapFromText("abcabcabcdaaaaa"))
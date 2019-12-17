const generateMapFromText = (searchText) => {
    let map = new Map()
    for (let i = 0; i <searchText.length; i++) {
        let count = 1
        if (map.has(searchText[i])) {
            map.set(searchText[i], count++)
        } else {
        map.set(searchText[i], count)
        }
    }
    return map
}

function logMapElements(value, key, map) {
    console.log(`map.get('${key}) = ${value})`)
}

console.log(generateMapFromText("abccbbb").forEach(logMapElements))
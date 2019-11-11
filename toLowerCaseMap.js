let map = new Map()

map.set('A', 'a')
map.set('B', 'b')
map.set('C', 'c')
map.set('D', 'd')
map.set('E', 'e')
map.set('F', 'f')
map.set('G', 'g')
map.set('H', 'h')
map.set('I', 'i')
map.set('J', 'j')
map.set('K', 'k')
map.set('L', 'l')
map.set('M', 'm')
map.set('N', 'n')
map.set('O', 'o')
map.set('P', 'p')
map.set('Q', 'q')
map.set('R', 'r')
map.set('S', 's')
map.set('T', 't')
map.set('U', 'u')
map.set('V', 'v')
map.set('W', 'w')
map.set('X', 'x')
map.set('Y', 'y')
map.set('Z', 'z')

const convertToLowerCase = function (myString) {
    let lowerCaseString = ""
    for (let i = 0; i < myString.length; i++) {
        if (map.has(myString[i])) {
            lowerCaseString = lowerCaseString.concat(map.get(myString[i]))
            matchFound = true
        } else {
            lowerCaseString = lowerCaseString.concat(myString[i])
        }
    }
        return lowerCaseString
}

console.log(convertToLowerCase("I AM A BIG ! STRING"))
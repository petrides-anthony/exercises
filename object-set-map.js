const user = {
    name: 'Tony',
    age: 27,
    profilePic: {
        src: 'p.jpg',
        size: '100x100',
    },
    pics: [
        {
            src: '1.jpg',
            size: '100x100',
        },
        {
            src: '2.jpg',
            size: '100x100',
        },
    ],
    contacts: [
        '0765445xxxx',
        'tony@gmail.com'
    ]
}

// 1. user name, age
console.log(`Username: ${user.name} Age: ${user.age}`)
// 2. size of the profile picture
console.log(`Profile Picture Size: ${user.profilePic.size}`)
// 3. src of 2nd pic
console.log(`Picture SRC: ${user.pics[1].src}`)
// 4. 1st contact
console.log(`First Contact: ${user.contacts[0]}`)
//Add a picture and print it
user.pics.push({
    src: 'naughty.jpg',
    size: '250x500'
})
console.log(user.pics[2])


/*
const alpha = {
    A: 'a',
    B: 'b',
    ...
}
alpha.C = 'c'

const z = Object.create(null)
z.A = 'a'
if (alpha.hasOwnProperty('A')) {
    
}

const m = new Map()
m.set('A', 'a')
m.set('B', 'b')

m.has('A')
m.get('A')
// 'a'

const s = new Set()
s.add('A')
s.add('B')

s.has('B')
{
    'A': null,
    'B': null,
}

*/



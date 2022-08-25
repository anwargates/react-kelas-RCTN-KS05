// // Destructuring Object

// const user = {}
// user.name = 'Muhammad Anwar'
// user.handle = '@muhammadanwar'
// user.location = 'Jakarta, Indonesia'

// // extraction
// const userName = user.name
// const userHandle = user.handle
// const userLocation = user.location
// console.log(userName, userHandle, userLocation)

// //

// const user = {
//     name: 'Muhammad Anwar',
//     handle: '@muhammadanwar',
//     location: 'Jakarta, Indonesia'
// }

// const { user, handle, location } = user
// console.log(name, handle, location)

// //

// const getUser = () => {
//     return {
//         name: 'Muhammad Anwar',
//         handle: '@muhammadanwar',
//         location: 'Jakarta, Indonesia'
//     }
// }

// const { name, handle, location } = getUser()
// console.log(name, handle, location);


// //

// const csv = "1997,Ford,F350,Must Sell!"

// const [year, make, model, description] =
//     csv.split(",")

// //

// const user = {
//     name: 'Muhammad Anwar',
//     handle: '@muhammadanwar',
//     location: 'Jakarta, Indonesia'
// }

// // extraction
// const { n: name, h: handle, l: location } = user
// console.log(name, handle, location);

//

// function declaration
// function add(a, b) {
//     return a + b
// }
// // function expression
// // const add = function (a, b) {
// //     return a + b
// // }
// // arrow function
// const add = (a, b) => {
//     return a + b
// }

//

// const add = (a, b) => a + b
const square = x => x * x
const three = () => 3

//

const add = (a, b) => {
    const temp = a + b
    return temp
}

function Person() {
    this.age = 0
    setInterval(() => {
        this.age++
        console.log(this.age)
    }, 1000)
}

// const p = new Person()

//

const printTick = () => {
    console.log("Tick")
}

// setInterval(printTick, 1000)

// filter

const animals = [
    { name: "Fluffy", species: "cat" },
    { name: "Carlo", species: "dog" },
    { name: "Nemo", species: "fish" },
    { name: "Hamilton", species: "dog" },
    { name: "Dory", species: "fish" },
    { name: "Ursa", species: "bear" }
]

let fish = []
for (let index = 0; index < animals.length; index++) {
    if (animals[index].species === 'fish') {
        fish.push(animals[index])
    }
}
// filter implementation
let fish2 = animals.filter((animal) => animal.species == 'fish')
console.log(fish, fish2)

// map

let names = animals.map((animal) => animal.name + animal.species)

// reducer

let orders = [
    { total: 325 },
    { total: 512 },
    { total: 128 },
    { total: 32 },
]

let total = orders.reduce((total, order) => total + order.total, 0)
console.log(total)




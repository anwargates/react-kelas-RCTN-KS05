
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado','grapes','oranges','watermelon']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (array.every(i => typeof i === "string")) {
            resolve(array.map(element => element.toUpperCase())) // resolve apabile semua value dalam array berbentuk string, bisa ditambahkan toString()
        } else {
            reject('error: array tidak semua berisi string') // reject apabila tidak semua array berbentuk string
        }
    })
}
const sortWords = (array) => {
    return new Promise((resolve, reject) => resolve(array.sort())) // sortir value dari array
}



makeAllCaps(arrayOfWords)
    .then(response => sortWords(response))
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(complicatedArray) // akan ter reject (error) karena array complicatedArray tidak semuanya berbentuk string dan tidak bisa diubah dengan metode toUpperCase
    .then(response => sortWords(response))
    .then(result => console.log(result))
    .catch(error => console.log(error))
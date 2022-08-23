// deklarasi variabel dengan let
let nama
nama = "anwar"
function myFunc() {
    return nama
}

console.log(nama)


// konstanta
const pi = 3.14

const objAngka = { id: 1, name: 'Arif', jenkel: 'L' }
objAngka.id = 2
objAngka.name = "Anwar"
objAngka.jenkel = "Laki"
console.log(objAngka)

const arrNumber = [1,2,3,4]
arrNumber.push(5)
arrNumber.push(6)
console.log(arrNumber);

// tipe data number
let originalNum = 23
let numberToBeAdded = 7
let newNum = originalNum + 7
console.log(newNum)


// tipe data string
console.log("Hello class Modern Javascript")

let message = "Welcome"
console.log(message)
message = "bye bye"
console.log(message)

// tipe data boolean
let isRaining = true
let isFinished = true
// let menuOpen = "true"

// array
var kode = ["React","Php","Ruby"]
let kode1 = ["React","Php","Ruby"]
const kode2 = ["React","Php","Ruby"]

var fruits = ['anggur', 'melati', 'apel', 'jeruk']
var buah_buahan = ['strawberry', 'pir', 'durian']
fruits.push.apply(fruits, buah_buahan)
console.log(fruits)

var fruits = ['anggur','melati','apel','jeruk']
var index_yang_ingin_dihapus = 1
fruits.splice(index_yang_ingin_dihapus)
console.log(fruits);


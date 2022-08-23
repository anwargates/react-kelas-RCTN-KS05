//apa itu variabel dan pentingnya variabel
console.log("Variabel adalah suatu tempat yang digunakan untuk menampung data di memori yang mempunyai nilai yang dapat berubah–ubah selama proses program.");

// deklarasi variabel dengan let
let nama = "anwar"
console.log(nama)

// mengisi variabel dengan nilai atau value
nama = "muhammad"
console.log(nama)

// memberi nama variabel yang baik
// penamaan dengan camelCase
let contohVar = ""

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

// apa itu tipe data
console.log("Tipe data adalah klasifikasi variable untuk menentukan data yang akan disimpan ke dalam memori. ");

// berbagai jenis tipe data
console.log("number, string, boolean");

// tipe data number dan pengoperasiannya
let originalNum = 23
let numberToBeAdded = 7
let newNum = originalNum + 7
console.log(newNum)


// tipe data string dan memanipulasinya
console.log("Hello class Modern Javascript")

let message = "Welcome"
console.log(message)
message = "bye bye"
console.log(message)

// tipe data boolean
let isRaining = true
let isFinished = true
// let menuOpen = "true"

// bagaimana cara mengetahui tipe data dari sebuah variabel

// array
var kode = ["React","Php","Ruby"]
let kode1 = ["React","Php","Ruby"]
const kode2 = ["React","Php","Ruby"]

// jenis array
// satu dimensi
let arrSingleDimension = ["React","Php","Ruby"]

// multidimensi
let arrMultiDimension = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
]

// mengisi array
var fruits = ['anggur', 'melati', 'apel', 'jeruk']
var buah_buahan = ['strawberry', 'pir', 'durian']
fruits.push.apply(fruits, buah_buahan)
console.log(fruits)

// menghapus isi array
var fruits = ['anggur','melati','apel','jeruk']
var index_yang_ingin_dihapus = 1
fruits.splice(index_yang_ingin_dihapus)
console.log(fruits);




// Definisi Class
class Person {
    // constructor
    constructor(name) {
        this._name = name
    }
    doWork() {
        return "complete!"
    }
    getName() {
        return this._name
    }
}

// Inheritance
// bisa ditambah export sebelum class jika mau banyak export
class Employee extends Person {
    constructor(name, title) {
        // method super
        super(name)
        this._title = title
    }
    doWork2() {
        return this._name + " is working"
    }
    getTitle() {
        return this._name + " is working as " + this._title
    }
}

let anwar = new Employee("Muhammad Anwar", "aslab")
console.log(anwar.doWork())
console.log(anwar.getName())
console.log(anwar.doWork2())
console.log(anwar.getTitle())

// modules export
export default Employee

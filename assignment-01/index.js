let string = ""
let op = ["+", "-", "/", "*", "."]
let opIfEmpty = ["+", "/", "*", "."]
let buttons = document.querySelectorAll('.button')
let displayText = document.querySelector('.display')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (string == "") return
            string = eval(string)
            displayText.innerHTML = string
            string = ""
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            displayText.innerHTML = string
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1)
            displayText.innerHTML = string
        }
        // cek operator tidak boleh dobel
        else if (op.some(operand => string.endsWith(operand)) && op.some(operand => operand.includes(e.target.innerHTML))) {
            string = string.slice(0, -1)
            string += e.target.innerHTML
            displayText.innerHTML = string
        } else {
            // cek operator tidak boleh di awal kecuali minus
            if (string == "" && opIfEmpty.some(operand => operand.includes(e.target.innerHTML))) return
            // cek koma tidak boleh dobel
            if (e.target.innerHTML == "." && string.includes(".")) return
            string = string.concat(e.target.innerHTML)
            displayText.innerHTML = string
        }
    }
    )
})
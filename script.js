let signSymbol = document.getElementById("sign")

let answerField = document.getElementById("answer")

let numberOne = document.getElementById("number-one")
let numberTwo = document.getElementById("number-two")


function addition() {
    signSymbol.textContent = "+"
    answerField.textContent = +(numberOne.value) + +(numberTwo.value)
}

function subtraction() {
    signSymbol.textContent = "-"
    answerField.textContent = +(numberOne.value) - +(numberTwo.value)
}

function multiplication() {
    signSymbol.textContent = "*"
    answerField.textContent = +(numberOne.value) * +(numberTwo.value)
}

function division() {
    signSymbol.textContent = "/"
    answerField.textContent = +(numberOne.value) / +(numberTwo.value)
}
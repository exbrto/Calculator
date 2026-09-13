// Need 4 doc querySelectors for click to run function
// Need two inputs
// Need four functions to return each inputs value
// Need a place for the result to go
document.querySelector('.addition').addEventListener('click', addThese)
document.querySelector('.subtract').addEventListener('click', subtractThose)
document.querySelector('.multiplacation').addEventListener('click', multiplyThese)
document.querySelector('.division').addEventListener('click', divideThose)
document.querySelector('.clear').addEventListener('click', clearThis)

function addThese() {
    let firstNum = Number(document.querySelector('#insertFirstValue').value)
    let secondNum = Number(document.querySelector('#insertSecondValue').value)
    let sum = firstNum + secondNum

    document.querySelector('.result').innerText = sum
}

function subtractThose() {
    let firstNum = Number(document.querySelector('#insertFirstValue').value)
    let secondNum = Number(document.querySelector('#insertSecondValue').value)
    let difference = firstNum - secondNum

    document.querySelector('.result').innerText = difference
}

function multiplyThese() {
    let firstNum = Number(document.querySelector('#insertFirstValue').value)
    let secondNum = Number(document.querySelector('#insertSecondValue').value)
    let product = firstNum * secondNum

    document.querySelector('.result').innerText = product
}

function divideThose() {
    let firstNum = Number(document.querySelector('#insertFirstValue').value)
    let secondNum = Number(document.querySelector('#insertSecondValue').value)
    let quotient = firstNum / secondNum

    document.querySelector('.result').innerText = quotient
}

function clearThis() {
    document.querySelector('#insertFirstValue').value = ''
    document.querySelector('#insertSecondValue').value = ''
    document.querySelector('.result').innerText = ''
}
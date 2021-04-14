const result = document.querySelector('.result')
const division = document.querySelector('.division')
const multiplication = document.querySelector('.multiplication')
const minus = document.querySelector('.minus')
const sum = document.querySelector('.sum')
const del = document.querySelector('.del')
const equals = document.querySelector('.equals')
const operators = ['+', '-', '*', '/', '.']
const valid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].concat(operators)


focusFunc = () => result.focus()
const example = (btn, func, operator) => btn.addEventListener('click', () => func(operator))

function exampleFunc(operator) {
    result.value += operator
    focusFunc()
}

function deliteFunc() {
    result.value = result.value.slice(0, -1)
    focusFunc()
}

function equalsFunc() {
    result.value = eval(result.value)
    focusFunc()
}

result.addEventListener('input', validationFunc)

example(division, exampleFunc, '/')
example(multiplication, exampleFunc, '*')
example(minus, exampleFunc, '-')
example(sum, exampleFunc, '+')
example(del, deliteFunc)
example(equals, equalsFunc)


function validationFunc(event) {
    if (valid.indexOf(event.data) === -1) {
        this.value = this.value.slice(0, -1)
    }
    if (operators.indexOf(event.data) !== -1 &&
        operators.indexOf(this.value[this.value.length - 2]) !== -1) {
        this.value = this.value.slice(0, -1)
    }
}
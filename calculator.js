const screen = document.getElementById('screen')
const ac = document.getElementById("Acbutton")
const pi = document.getElementById("pibutton")
const square = document.getElementById("squarebutton")
const sqrt = document.getElementById("sqrtbutton")
const log = document.getElementById('logbutton')
const factorial = document.getElementById("factorialbutton")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const equal = document.getElementById("equal")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const divide = document.getElementById("division")
const multiply = document.getElementById("mult")
const dot = document.getElementById("dot")
const sin = document.getElementById("sinus")
const cos = document.getElementById("cosinus")
const tan = document.getElementById("tangent") 

let a; 
let b;

one.addEventListener('click',function(){
    screen.value += 1
    zero.disabled = false
})

two.addEventListener('click',function(){
    screen.value += 2
    zero.disabled = false
})

three.addEventListener('click', function(){
    screen.value += 3
    zero.disabled = false
})

four.addEventListener('click', function(){
    screen.value += 4
    zero.disabled = false
})

five.addEventListener('click', function() {
    screen.value += 5
    zero.disabled = false
})

six.addEventListener('click', function(){
    screen.value += 6
    zero.disabled = false
})


seven.addEventListener('click', function(){
    screen.value += 7
    zero.disabled = false
})

eight.addEventListener('click', function(){
    screen.value += 8
    zero.disabled = false
})

nine.addEventListener("click", function(){
    screen.value += 9
    zero.disabled = false
})

zero.addEventListener("click",function(){
    if (screen.value == "") {
        return
    }
    if (screen.value != "") {
        screen.value += 0
    }
} )

dot.addEventListener("click",function(){
    screen.value += '.'
    dot.disabled = true;
})

ac.addEventListener("click",function(){
    screen.value = ""

})



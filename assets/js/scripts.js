const incrementar = (fontSize = 1) => {
const elemento = document.querySelector ('.parra')
const fontSizeActual = parseInt (elemento.style.fontSize)
const nuevoFontSize = fontSizeActual + fontSize + "px"
elemento.style.fontSize = nuevoFontSize
}

const button1 = document.querySelector ('.Btn1')
console.log ('Btn1')
const button2 = document.querySelector ('.Btn2')
const button3 = document.querySelector ('.Btn3')

button1.addEventListener ("click", function () {
    incrementar ()

})

button2.addEventListener ("click", ()=>{
    incrementar(2)
})

button3.addEventListener ("click", ()=>{
    incrementar (10)
})
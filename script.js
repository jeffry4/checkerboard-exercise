// Your JS goes here\
var x;
let board = document.querySelector("body")
for(var i = 0; i < 81; i++) {
 var div = document.createElement("div")
//board.appendChild(div) 
var b = document.querySelector("div")
div.style.width = "11.1%"
div.style.cssFloat = "left"
div.style.paddingBottom = "11.1%"
if(x) {
div.style.backgroundColor = "black"
x = false
} else {
div.style.backgroundColor = "red" 
x = true 
}
board.appendChild(div)
}
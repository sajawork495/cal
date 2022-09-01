//المتغير 
var screen=document.getElementById("screen");
// // fun
function display(a){
    screen.value +=a;
}
function clearScreen(){
    screen.value="";
}
var operType='';
function calculate(){
    screen.value=eval(screen.value);
}
// function percentage(screen,value) {
//     return (100 * partialValue) / totalValue;
//  }
//  function percentage() {
//     screen.value= (screen.value) / 100;
//  }


function calculator(){
 var x = document.getElementById("num").value;
 var y = document.getElementById("op").value;
       
switch(y){
case "+":
    
    display( screen.value +=a);
break;
case "-":
document.getElementById("screen") = x - z;
break;

case "*":
document.getElementById("screen") = x * z;
break;

case "/":
document.getElementById("screen") = x / z;
break;

case "%":
document.getElementById("screen") = x % z;
break;

Default:
alert("Choose the operator");}}

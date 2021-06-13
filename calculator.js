//This a calculator wriiten to understand higher order functions in javascript i.e functions that takes other functions as input.
function add(num1,num2){
 return num1+num2;
}
function subtract(num1,num2){
 return num1-num2;
}
function divide(num1,num2){
 return num1/num2;
}
function multiply(num1,num2){
 return num1*num2;
}
function calculator(num1,num2,operator){
 return operator(num1,num2);
}


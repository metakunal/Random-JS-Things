var output=[];
var a=1;
    
function fizzBuzz(){
    if(a%3===0&&a%5===0){
output.push("fizzBuzz");
}else if(a%3===0){
output.push("fizz");
}else if(a%5===0){
output.push("Buzz");
}else{
    output.push(a);
}
    a=a+1;
    console.log(output);

}

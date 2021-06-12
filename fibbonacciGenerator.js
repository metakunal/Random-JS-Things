function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var output=[0,1];
    for(var i=2;i<n;i++){
        var newN=output[i-1]+output[i-2];
        output.push(newN);
    }
    //Return an array of fibonacci numbers starting from 0.
    if(n===1){
return [0];
}
else{
return output;
}
//Do NOT change any of the code below 👇
}

function isLeap(year) {
       
    var r="";
if(year%4===0){
    if(year%100===0)
    {
        if(year%400===0){
            r="Leap year."
        }
        else{
            r="Not leap year."
        }
    }
    else{
        r="Leap year."
    }
}
else{
    r="Not leap year."
}
return r;
}
var a=prompt("Enter the year of your choice : ");    
alert(isLeap(a));

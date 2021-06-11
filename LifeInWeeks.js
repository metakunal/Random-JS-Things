function lifeInWeeks(age) {
    
 
    
    //Write your code here.
    var daysTotal=90*365;
    var weeksTotal=90*52;
    var monthsTotal=90*12;
    var daysLeft=daysTotal-age*365;
    var weeksLeft=weeksTotal-age*52;
    var monthsLeft=monthsTotal-age*12;
    alert("You have "+daysLeft+" days, "+weeksLeft+" weeks, "+monthsLeft+" months left.");   
    
    
    
    

}
var a=prompt("Enter Your Age : ");

    lifeInWeeks(56)


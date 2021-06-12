function whosPaying(names) {
    var l=names.length;
    var a=Math.random(l);
    a=a*l;
    a=Math.round(a);
    var r=names[a]+" is going to buy lunch today!";
    return r;   
}

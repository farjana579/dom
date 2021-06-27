var depth=35
var animal=0;
if(depth<=10)
{
    animal=depth*100;
    console.log(animal)
}
else if(depth<=20)
{
    var firstPart=10*100;
    var remaining=depth-10;
    var secondPart=remaining*300;
    animal=firstPart+secondPart;
    console.log(animal);
}
else{
    var firstPart=10*100;
    var remaining=depth-20;
    var secondPart=remaining*500;
    animal=firstPart+secondPart;
    console.log(animal);
}
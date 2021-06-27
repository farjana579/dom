function animalCalculator(depth)
{
    if(depth<=10)
{
    animal=depth*100;
 }
else if(depth<=20)
{
    var firstPart=10*100;
    var remaining=depth-10;
    var secondPart=remaining*300;
    animal=firstPart+secondPart;
 }
else{
    var firstPart=10*100;
    var remaining=depth-20;
    var secondPart=remaining*500;
    animal=firstPart+secondPart;
}
return animal;
}
var result=animalCalculator(100)
console.log(result)
var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

var myD = 137;
var myE = dollarToEuro(myD);
var myY = euroToYen(myE);

console.log(myY);

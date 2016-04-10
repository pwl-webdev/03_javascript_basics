//Problem 2
//Even Fibonacci numbers
//
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var lowNo = 1;
var highNo = 2;
var stopNo = 4000000;
var summedEvenFibonacciNo = 0;


while (highNo < stopNo){
	if(highNo % 2 === 0){
		summedEvenFibonacciNo += highNo;	
	}
	highNo += lowNo;
	lowNo = highNo - lowNo; 
}
console.log("Sum of all Fibonacci numbers under "+stopNo+" is equal to: "+summedEvenFibonacciNo);

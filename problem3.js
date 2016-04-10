//Largest prime factor
//Problem 3
//
//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor under 1000 of the number 600851475143 ?

var bigNumber = 600851475143;
var largestPrimeFactor = 0;
var stopNo = 1000;
var prime = false;

for (var i = 1; i <= stopNo; i++){
	prime = true;
	for (var j = 1; j < i && !prime; j++){
		if(i % j === 0){
			prime = false;
		}	
	}
	if(prime){
		if(bigNumber % i === 0){
			largestPrimeFactor = i;
		}
	}
}
console.log("The biggest prime factor of number "+bigNumber+" under "+stopNo+" is equal to: "+largestPrimeFactor);


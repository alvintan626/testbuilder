// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

var detectNetwork = function(cardNumber) {

  if (cardNumber.length == 14 && cardNumber.slice(0,2) == '38' || cardNumber.slice(0,2) == '39') {
  	return ('Diner\'s Club');
  } else if (cardNumber.length == 15 && cardNumber.slice(0,2) == '34' || cardNumber.slice(0,2) == '37') {
  	return 'American Express';
  } else if (cardNumber.length == 13 || cardNumber.length == 16 && cardNumber.slice(0,1) == '4') {
  	return 'Visa';
  } else if (cardNumber.length == 16 && cardNumber.slice(0,2) == '51' || cardNumber.slice(0,2) == '52' || cardNumber.slice(0,2) == '53' || cardNumber.slice(0,2) == '54' || cardNumber.slice(0,2) == '55') {
  	return 'Master Card';
  } 

};

console.log(detectNetwork('343456789012345'));
console.log(detectNetwork('38345678901234'));
console.log(detectNetwork('373456789012345'));

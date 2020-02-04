function howManyHundreds(number) {
	let result = "";
	if (number >= 100) {
		result = (number - (number % 100)) / 100;
	} else {
		return 0;
	}
	return result;
}

/* TESTING THE CODE BELOW
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
*/

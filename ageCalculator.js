function ageCalculator(name, yearOfBirth, currentYear) {
	let age = currentYear - yearOfBirth; //calculate the age
	return name + " is " + age + " years old."; //return the output
}

ageCalculator("Suzie", 1983, 2015);

/* TESTING BELOW
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

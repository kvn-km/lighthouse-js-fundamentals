/*
Print numbers from RANGE.
If the number is multiple of MULTIPLES,
print one or both of two WORDS.
*/

function loopyLighthouse(range, multiples, words) {
  let theString = "";
  for (let i = range[0]; i <= range[1]; i++) {
    //lets iterate through the Range
    if (
      //the arguments supplied don't work, don't work
      range[0] > range[1] ||
      multiples[0] <= 0 ||
      multiples[1] <= 0 ||
      words[0] == undefined ||
      words[1] == undefined
    ) {
      theString = "Please try again";
      //find multiple of supplied numbers and print one or both words
    } else if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      theString = words[0] + words[1];
    } else if (i % multiples[0] === 0 && i % multiples[1] != 0) {
      theString = words[0];
    } else if (i % multiples[0] != 0 && i % multiples[1] === 0) {
      theString = words[1];
    } else {
      //otherwise, just print out the next number on the list
      theString = i;
    }
    console.log(theString);
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

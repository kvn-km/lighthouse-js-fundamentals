const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function(moves) {
  // initiating our x-y position, we start at 0,0
  let thePosition = [0, 0];
  // iterate through the array
  for (let move of moves) {
    // check the value for each element
    switch (move) {
      case "north":
        thePosition[1] += 1;
        break;
      case "south":
        thePosition[1] -= 1;
        break;
      case "east":
        thePosition[0] += 1;
        break;
      case "west":
        thePosition[0] -= 1;
        break;
    }
  }
  // return the results
  return thePosition;
};

// console.log(finalPosition(moves));

/*  expected output:
	[-1, 4]
*/

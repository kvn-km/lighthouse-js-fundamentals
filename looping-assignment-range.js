function range(start, end, step) {
  let numArray = [];
  if (
    //return empty array if arguments are bad
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start > end ||
    step <= 0
  ) {
    return numArray;
  } else if (start === end) {
    //return the number since both start and end are the same
    return numArray.push(start);
  } else {
    do {
      numArray.push(start);
      start += step;
    } while (start <= end);
  }
  return numArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function lastIndexOf(arr, val) {
  let theIndex = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === val) {
      theIndex = i;
    }
  }
  return theIndex;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([], 3));

function concat(arr1, arr2) {
  let concatArr = [];
  for (let i = 0; i < arr1.length; i++) {
    concatArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    concatArr.push(arr2[i]);
  }
  return concatArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([0, 3, 1], [9, 7, 2]));
console.log(concat([], [9, 7, 2]));
console.log(concat([5, 10], []));

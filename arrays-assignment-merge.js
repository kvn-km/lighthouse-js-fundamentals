function merge(arr1, arr2) {
  let concatArr = [];
  for (let i = 0; i < arr1.length; i++) {
    concatArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    concatArr.push(arr2[i]);
  }
  return concatArr.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));
console.log(merge([4], [2, 5, 8]));
console.log(merge([1, 2, 6], []));

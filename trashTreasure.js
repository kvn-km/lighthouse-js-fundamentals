const smartGarbage = function(trash, bins) {
  // find and set the vavlue of the correct key
  let theValue = bins[trash];
  // add one to the value
  theValue++;
  // set the new value to the correct key
  bins[trash] = theValue;
  // return the output
  return bins;
};

// console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));

/*  
  expected output:
    {
      waste: 4,
      recycling: 3,
      compost: 5
    }
 */

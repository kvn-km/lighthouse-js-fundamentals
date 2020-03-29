/*
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
];

const metric = "redness";
*/

const judgeVegetable = function(vegetables, metric) {
  // declare measurement vars
  let theWinner = "";
  let theMetric = 0;
  // iterate through each veggie
  for (let vegetable of vegetables) {
    // check for winning metric value and assign to vars
    if (vegetable[metric] > theMetric) {
      theWinner = vegetable.submitter;
      theMetric = vegetable[metric];
    }
  }
  // who's the winner?
  return theWinner;
};

// judgeVegetable(vegetables, metric);

//  expected output
//  "Old Man Franklin"

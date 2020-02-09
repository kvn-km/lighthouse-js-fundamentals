const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas"
];

// Write a while loop that prints out the contents of ingredients:
let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}
// Write a for loop that prints out the contents of ingredients:
for (let y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let z = ingredients.length - 1;
while (z >= 0) {
  console.log(ingredients[z]);
  z--;
}

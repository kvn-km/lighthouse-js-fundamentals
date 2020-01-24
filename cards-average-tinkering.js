const cards = ['diamond', 'spade', 'heart', 'club'];

/*
Just curious, based off of a Codecademy Javascript Loop lesson.
Lets pull 4 types of shapes at random.
How long before SPADES turns up?
Let's try 10,000 times and see the average.
*/

let currentCard;        //draw a shape
let i = 1;              //start 10,000 at 1
let counter = 0;        //how many draws before the shape is SPADES
let totalCounter = 0;   //totalling through 10,000 tries
let average;            //our goal number

while (i <= 10000) { //lets do it 10,000 times
  while (currentCard != "spade") { //draw cards until the shape matches SPADES
    currentCard = cards[Math.floor(Math.random() * 4)]; //randomized number/card
    counter ++; //how many pulls before we got a match?
  }
  totalCounter += counter; //add the number of pulls for all tries
  currentCard = null; //reset and try again
  counter = 0; //reset and try again
  i ++; //increment by 1, and try again
}
average = totalCounter/10000;
console.log(`It takes an average of ${average.toFixed(2)} pulls it get SPADES from 4 shapes.`);

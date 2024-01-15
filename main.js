// PLAY WITH LOOPS
// WHILE LOOP & FOR LOOP

//  let n = 0;
// while (n < 1000) {
//      console.log(n + "- I will not chew gum in class!");
//      n++;
// }

// for (let n = 0; n < 100; n++) {
//      console.log)n + "- I will not chew gum in class!");
// }

let numHeads = 0;
let numTails = 0;

while (numHeads < 100) {
  // One Coin Flip
  let randToss = Math.random();
  if (randToss < 0.5) {
    numHeads++;
  } else {
    numTails++;
  }
}

console.log("NumHeads: " + numHeads);
console.log("NumTails: " + numTails);

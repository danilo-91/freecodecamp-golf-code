const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1)	  return names[0];
  if (strokes <= par - 2) return names[1];
  if (strokes == par - 1) return names[2];
  if (strokes == par)	  return names[3];
  if (strokes == par + 1) return names[4];
  if (strokes == par + 2) return names[5];
  return names[6];
  // Only change code above this line
}

console.log(golfScore(4, 1), "Hole-in-one!");
console.log(golfScore(4, 2), "Eagle");
console.log(golfScore(5, 2), "Eagle");
console.log(golfScore(4, 3), "Birdie");
console.log(golfScore(4, 4), "Par");
console.log(golfScore(1, 1), "Hole-in-one!");
console.log(golfScore(5, 5), "Par");
console.log(golfScore(4, 5), "Bogey");
console.log(golfScore(4, 6), "Double Bogey");
console.log(golfScore(4, 7), "Go Home!");
console.log(golfScore(5, 9), "Go Home!");
/* Strokes	Return
1		"Hole-in-one!"
<= par - 2	"Eagle"
par - 1		"Birdie"
par		"Par"
par + 1	  	"Bogey"
par + 2		"Double Bogey"
>= par + 3  	"Go Home!"
*/

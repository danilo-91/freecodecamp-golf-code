const multiply = (intA, intB) => {
  let result = 0;
  const positive = Math.abs(intB) == intB;
  for (i = 0; i < Math.abs(intB); i++) {
    result = positive ? result + intA : result - intA;
  }
  
  return result;
}

const result = multiply(-50, -50);

let myArr = ["Dani", 12, 3.0, null];
let appendThis = ["Lobo", 33, 1.2, null];

for (i=appendThis.length; i>0; i--) {
  let popped = appendThis.shift();
  myArr.unshift(popped);
}

//myArr.push(appendThis);

let letVariable = "this is a let";

const myFunction = () => {
  var varVariable = "this is a var";
  const constVariable = "this is a const";
  let letVariable = "this is a second let";
  return letVariable;
}

console.log(JSON.stringify(myArr))

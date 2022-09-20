const wrongSwitch = (value) => {
  let answer = "";
  switch(value) {
    case 1:
      answer += "one";
    case 2:
      answer += "two";
      break;
    case 3:
      answer += "three";
      break;
    case 4:
      answer += "four";
    case 5:
      answer += "five";
    default:
      answer += "default";
      break;
  }
  return answer;
}

console.log(wrongSwitch(1));
console.log(wrongSwitch(2));
console.log(wrongSwitch(3));
console.log(wrongSwitch(4));
console.log(wrongSwitch(5));
console.log(wrongSwitch(6));


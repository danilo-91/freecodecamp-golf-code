const validPhoneNumbers = [
  /^1?\([0-9]{3}\)[0-9]{3}-[0-9]{4}/,
  /^1?[0-9]{3}-[0-9]{3}-[0-9]{4}/,
  /^[0-9]{3}-[0-9]{3}-[0-9]{4}/,
  /^1[0-9]{10}/,
  /^[0-9]{10}$/
  ];
// valid phone numbers in regex format

function telephoneCheck(str) {
  // trim spaces to reduce variability
  const newPhone = str.replace(/ /g,"");
  // check if phone number is valid with .some built-in array method
  // it checks if any of the array members return true to the string.match method
  const isValid = validPhoneNumbers.some(x => newPhone.match(x))
  return isValid;
}

console.log(telephoneCheck("6054756961"));
// tests from freeCodeCamp

console.log("test 1 ", (telephoneCheck("555-555-5555") == true));
console.log("test 2 ", (telephoneCheck("1 555-555-5555") == true));
console.log("test 3 ", (telephoneCheck("1 (555) 555-5555") == true));
console.log("test 4 ", (telephoneCheck("5555555555") == true));
console.log("test 5 ", (telephoneCheck("555-555-5555") == true));
console.log("test 6 ", (telephoneCheck("(555)555-5555") == true));
console.log("test 7 ", (telephoneCheck("1(555)555-5555") == true));
console.log("test 8 ", (telephoneCheck("555-5555") == false));
console.log("test 9 ", (telephoneCheck("5555555") == false));
console.log("test 10 ", (telephoneCheck("1 555)555-5555") == false));
console.log("test 11 ", (telephoneCheck("1 555 555 5555") == true));
console.log("test 12 ", (telephoneCheck("1 456 789 4444") == true));
console.log("test 13 ", (telephoneCheck("123**&!!asdf#") == false));
console.log("test 14 ", (telephoneCheck("55555555") == false));
console.log("test 15 ", (telephoneCheck("(6054756961)") == false));
console.log("test 16 ", (telephoneCheck("2 (757) 622-7382") == false));
console.log("test 17 ", (telephoneCheck("0 (757) 622-7382") == false));
console.log("test 18 ", (telephoneCheck("-1 (757) 622-7382") == false));
console.log("test 19 ", (telephoneCheck("2 757 622-7382") == false));
console.log("test 20 ", (telephoneCheck("10 (757) 622-7382") == false));
console.log("test 21 ", (telephoneCheck("27576227382") == false));
console.log("test 22 ", (telephoneCheck("(275)76227382") == false));
console.log("test 23 ", (telephoneCheck("2(757)6227382") == false));
console.log("test 24 ", (telephoneCheck("2(757)622-7382") == false));
console.log("test 25 ", (telephoneCheck("555)-555-5555") == false));
console.log("test 26 ", (telephoneCheck("(555-555-5555") == false));
console.log("test 27 ", (telephoneCheck("(555)5(55?)-5555") == false));
console.log("test 28 ", (telephoneCheck("55 55-55-555-5") == false));
console.log("test 29 ", (telephoneCheck("11 555-555-5555") == false));


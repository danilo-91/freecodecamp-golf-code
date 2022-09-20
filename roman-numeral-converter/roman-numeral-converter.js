function convertToRoman(num) {
 let romanNumber = '';
 let initialNumber = num;

 while (num > 0) {
  if (num >= 1000) {
    romanNumber += 'M';
    num -= 1000;
    continue;
  }
  if (num >= 900) {
    romanNumber += 'CM';
    num -= 900;
    continue;
  }
  if (num >= 500) {
    romanNumber += 'D';
    num -= 500;
    continue;
  }
  if (num >= 400) {
    romanNumber += 'CD';
    num -= 400;
    continue;
  }
  if (num >= 100) {
    romanNumber += 'C';
    num -= 100;
    continue;
  }
  if (num >= 90) {
    romanNumber += 'XC';
    num -= 90;
    continue;
  }
  if (num >= 50) {
    romanNumber += 'L';
    num -= 50;
    continue;
  }
  if (num >= 40) {
    romanNumber += 'XL';
    num -= 40;
    continue;
  }
  if (num >= 10) {
    romanNumber += 'X';
    num -= 10;
    continue;
  }
  if (num >= 9) {
    romanNumber += 'IX';
    num -= 9;
    continue;
  }
  if (num >= 5) {
    romanNumber += 'V';
    num -= 5;
    continue;
  }
  if (num >= 4) {
    romanNumber += 'IV';
    num -= 4;
    continue;
  }
  if (num >= 1) {
    romanNumber += 'I';
    num -= 1;
  }
 }


 
 return romanNumber;
}

const test = () => {
  let passed = true;
  passed = (convertToRoman(2) === "II")
  passed = (convertToRoman(3) === "III")
  passed = (convertToRoman(4) === "IV")
  passed = (convertToRoman(5) === "V")
  passed = (convertToRoman(9) === "IX")
  passed = (convertToRoman(12) === "XII")
  passed = (convertToRoman(16) === "XVI")
  passed = (convertToRoman(44) === "XLIV")
  passed = (convertToRoman(45) === "XLV")
  passed = (convertToRoman(68) === "LXVIII")
  passed = (convertToRoman(83) === "LXXXIII")
  passed = (convertToRoman(97) === "XCVII")
  passed = (convertToRoman(99) === "XCIX")
  passed = (convertToRoman(400) === "CD")
  passed = (convertToRoman(500) === "D")
  passed = (convertToRoman(501) === "DI")
  passed = (convertToRoman(649) === "DCXLIX")
  passed = (convertToRoman(798) === "DCCXCVIII")
  passed = (convertToRoman(891) === "DCCCXCI")
  passed = (convertToRoman(1000) === "M")
  passed = (convertToRoman(1004) === "MIV")
  passed = (convertToRoman(1006) === "MVI")
  passed = (convertToRoman(1023) === "MXXIII")
  passed = (convertToRoman(2014) === "MMXIV")
  passed = (convertToRoman(3999) === "MMMCMXCIX")
  return passed;
}

console.log(test());

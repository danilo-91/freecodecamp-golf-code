// Objeto con el alfabeto y su equivalente en rot13
// Pasando una letra aquí se codifica/decodifica

const rot13Alphabet = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M"
}; 

function rot13(str) {
  const notLetter = /[^A-Z]/; // Regex que, con la función match, devuelve true para todo aquello que no sea una letra mayúscula
  const mapFunction = x => {
    if (x.match(notLetter)) return x; // Si no es una letra, devolver x
    return rot13Alphabet[x]; // Devolver su equivalente en rot13. Lo codificado se decodifica. Lo decodificado se codifica.
  }
  // Sobre un string hago split, uso un map para generar un nuevo array
  // Y finalmente un join para volver a unir cada componente en un string
  const newString = str.split('').map(mapFunction).join('');

  return newString;
}

console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR PBQR PNZC??"))
console.log(rot13("SERR PBQR PNZC!!"))

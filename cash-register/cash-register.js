const currencyValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100
}

const deepCopy = (array) => {
  return JSON.parse(JSON.stringify(array));
}

const round = (x) => {
  return Math.round(x*100)/100;
}

const module = (x, y) => {
  return round(((x*100) % (y*100))/100);
}

function checkCashRegister(price, cash, cid) {
  let changeCheck = deepCopy(cid).reverse();
  let changeValue = cash - price;
  let change = [];
  
  changeCheck.forEach(changeRow => {
    if (currencyValue[changeRow[0]] <= changeValue && changeRow[1] > 0) {
      let remain = module(changeValue, currencyValue[changeRow[0]]);
      let neededDebit = changeValue - remain;
      let actualDebit = neededDebit > changeRow[1] ? changeRow[1] : neededDebit;
      change.push([changeRow[0], round(actualDebit)]);
      changeRow[1] -= actualDebit;
      changeValue -= actualDebit;
    }
  })

  let registerBalance = round(changeCheck.map(x => x[1]).reduce((a, b) => a + b));
  let cidBalance = round(cid.map(x => x[1]).reduce((a, b) => a + b));
  //console.log(registerBalance, cidBalance, cid)

  const status = changeValue > 0 ? "INSUFFICIENT_FUNDS" : registerBalance > 0 ? "OPEN" : "CLOSED";

  if (status === "INSUFFICIENT_FUNDS") change = [];
  if (status === "CLOSED") change = cid;
  
  return {status, change};
}

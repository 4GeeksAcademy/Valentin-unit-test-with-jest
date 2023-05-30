console.log('Hello World')

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
  function fromEuroToDollar(amount) {
    return amount * 1.2;
  }
  function fromDollarToYen(amount) {
    return amount * 153.48;
  }
  const fromYenToPound = (a) => {
    return a / 102.32
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
  
'use strict';

function doubleOddNumbers(numbers) {
  const doubleOddNum = [];
  const oddNumbers = numbers.filter(number => number % 2 !== 0 && number !== 0);
  oddNumbers.map(number => {
    const double = number * 2;
    return doubleOddNum.push(double);
  });
  return doubleOddNum;
}

const myNumbers = [1, 2, 3, 4];
const double = doubleOddNumbers(myNumbers);
console.log(double);

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};

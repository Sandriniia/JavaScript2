'use strict';

function doubleOddNumbers(numbers) {
  let doubleOddNumbers = [];
  const oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0 && number !== 0;
  });
  oddNumbers.map((number) => {
    let double = number * 2;
    doubleOddNumbers.push(double);
  });
  return doubleOddNumbers;
}

const someNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(someNumbers));

// Do not change or remove anything below this line
module.exports = {
  someNumbers,
  doubleOddNumbers,
};

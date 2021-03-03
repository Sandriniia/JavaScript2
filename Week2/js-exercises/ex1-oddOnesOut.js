/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

function doubleEvenNumbers(numbers) {
  let doubleEvenNumbers = [];
  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0 && number !== 0;
  });
  evenNumbers.map((number) => {
    let double = number * 2;
    doubleEvenNumbers.push(double);
  });
  return doubleEvenNumbers;
}

const myNumbers = [1, 2, 3, 4];
const otherNumbers = [7, 1, 5, 14, 2, 18, 4, 0];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console
console.log(doubleEvenNumbers(otherNumbers));

/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

const hackYourFutureMembers = [
  {
    name: 'Wouter',
    age: 33,
  },
  {
    name: 'Federico',
    age: 32,
  },
  {
    name: 'Noer',
    age: 27,
  },
  {
    name: 'Tjebbe',
    age: 22,
  },
];

function collectiveAge(people) {
  const sumOfAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
  return sumOfAge;
}

console.log('The collective age of the HYF team is: ' + collectiveAge(hackYourFutureMembers));

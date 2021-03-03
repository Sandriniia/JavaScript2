/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const container = document.querySelector('.main');

function createHTMLList(arr) {
  const ul = document.createElement('ul');
  container.append(ul);
  arr.map((hobbie) => {
    const li = document.createElement('li');
    ul.append(li);
    li.append(hobbie);
  });
}

createHTMLList(myHobbies);

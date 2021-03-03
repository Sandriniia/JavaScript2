/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const tuesdayTasks = [
  {
    name: 'Daily standup',
  },
  {
    name: 'Feature discussion',
    duration: '120',
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function dayWorth(tasks, hourlyRate) {
  let sum = 0;
  tasks.map(task => {
    if (task.duration && typeof task.duration === 'number') {
      const taskRate = (task.duration / 60) * hourlyRate;
      sum += taskRate;
    }
    return sum;
  });
  return `€ ${sum.toFixed(2)}`;
}

console.log(dayWorth(mondayTasks, 25));
console.log(dayWorth(mondayTasks, 13.37));
console.log(dayWorth(tuesdayTasks, 25));

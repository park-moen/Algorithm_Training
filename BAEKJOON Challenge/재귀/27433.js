const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

// firstSolution: Approach using a for loop
function firstSolution(input) {
  if (input <= 1) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  return result;
}

console.log(firstSolution(input));

// secondSolution: Solving the problem using a recursive function
function secondSolution(input) {
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  return factorial(input);
}

console.log(secondSolution(input));

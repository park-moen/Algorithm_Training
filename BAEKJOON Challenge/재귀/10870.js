const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

// recursiveSolution: Solving implemented with a recursive function
function recursiveSolution(input) {
  function fibonacciRecursive(n) {
    if (n < 2) {
      return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }

  return fibonacciRecursive(input);
}

console.log(recursiveSolution(input));

// iterativeSolution: Solving implemented with a for loop
function iterativeSolution(input) {
  if (input === 0 || input === 1) {
    return input;
  }

  let prevPrev = 0;
  let prev = 1;
  let current = 0;

  for (let i = 2; i <= input; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

console.log(iterativeSolution(input));

// dpSolution: Approach using the dp
function dpSolution(input) {
  if (input === 0 || input === 1) {
    return input;
  }

  const dp = Array.from({ length: input + 1 }, () => 0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[input];
}

console.log(dpSolution(input));

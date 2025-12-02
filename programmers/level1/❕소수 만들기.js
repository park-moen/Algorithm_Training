function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(nums) {
  let count = 0;

  function combination(current, start) {
    if (current.length === 3) {
      const sum = current.reduce((acc, cur) => acc + cur, 0);
      count += isPrime(sum) ? 1 : 0;
      return;
    }

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      combination(current, i + 1);
      current.pop();
    }

    return count;
  }

  combination([], 0);

  return count;
}

const nums = [1, 2, 3, 4];

console.log(solution(nums));

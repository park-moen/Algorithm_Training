// ! 문제 풀이: N/2마리를 골라야 하는데, 종류가 충분하면 N/2종류를 다 고를 수 있고, 종류가 부족하면 있는 종류만큼만 고를 수 있다.

function solution(nums) {
  const minPickNumber = Math.floor(nums.length / 2);
  const typeNumber = new Set(nums).size;

  return Math.min(minPickNumber, typeNumber);
}

const nums = [3, 1, 2, 3];

console.log(solution(nums));

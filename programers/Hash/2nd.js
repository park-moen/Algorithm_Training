function solution(clothes) {
  var answer = 0;
  const Hash = new Map();

  for (let [_, body] of clothes) {
    if (Hash.has(body)) Hash.set(body, Hash.get(body) + 1);
    else Hash.set(body, 1);
  }

  let temp = 1;

  for (let [_, val] of Hash) {
    temp *= val + 1;
  }

  answer = temp - 1;
  return answer;
}

const arr1 = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

const arr2 = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

console.log(solution(arr2));

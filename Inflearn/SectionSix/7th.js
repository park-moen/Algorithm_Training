function solution(need, plan) {
  let answer = 'YES';
  const queue = need.split('');

  for (let val of plan) {
    if (queue.includes(val) && queue.shift() !== val) return 'NO';
  }

  if (queue.length > 0) return 'NO';

  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
// includes

function solution(s) {
  let answer;
  const temp = new Map();

  for (let val of s) {
    if (temp.has(val)) temp.set(val, temp.get(val) + 1);
    else temp.set(val, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of temp) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

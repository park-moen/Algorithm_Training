function solution(str1, str2) {
  let answer = 'YES';
  const temp = new Map();

  for (let val of str1) {
    if (temp.has(val)) temp.set(val, temp.get(val) + 1);
    else temp.set(val, 1);
  }

  for (let val of str2) {
    if (!temp.has(val) || temp.get(val) === 0) return 'NO';
    temp.set(val, temp.get(val) - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

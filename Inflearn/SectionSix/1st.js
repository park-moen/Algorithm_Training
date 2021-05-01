function solution(s) {
  let answer = 'YES';
  const stack = [];

  for (let val of s) {
    if (val === '(') stack.push(val);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  if (stack.length > 0) return 'NO';

  return answer;
}

let a = '(()(()))(()';

console.log(solution(a));

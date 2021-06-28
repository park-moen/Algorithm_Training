function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer++;
    }
  }

  return answer;
}

let a = '()(((()())(())()))(())';
let b = '(((()(()()))(())()))(()())';

console.log(solution(b));

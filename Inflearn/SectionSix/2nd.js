function solution(s) {
  let answer;
  const stack = [];

  for (let val of s) {
    if (val === ')') {
      while (stack.pop() !== '(');
    } else stack.push(val);
  }

  answer = stack.join('');

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

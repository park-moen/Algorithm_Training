function solution(s) {
  const stack = [];

  for (let bracket of s) {
    if (')' === bracket && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
}

const s = ')()(';

solution(s);

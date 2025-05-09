function solution(s) {
  if (s[0] === ')') {
    return false;
  }

  const stack = [];

  for (let value of s) {
    if (value === '(') {
      stack.push(value);
    }

    if (value === ')') {
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

const trulyS = '(())()';
const falselyS = '(()(';

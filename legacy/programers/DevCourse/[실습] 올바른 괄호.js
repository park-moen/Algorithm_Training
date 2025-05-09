// stack을 사용하게 된다면 Array.prototype.push(), Array.prototype.pop()과 같은 내장 함수를 사용하면서 시간 복잡도가 올라가는 문제가 발생해서 효율성 검사를 진행하게 된다면 문제를 해결할 수 없다.
function wrongSolution(s) {
  const stack = [];

  for (const value of s) {
    if (value === '(') {
      stack.push(value);
    } else {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}

function solution(s) {
  let count = 0;

  for (let x of s) {
    if (x === '(') {
      count++;
    } else {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count === 0;
}

const s1 = '(())()';
const s2 = '(()(';

console.log(wrongSolution(s2));
console.log(solution(s1));

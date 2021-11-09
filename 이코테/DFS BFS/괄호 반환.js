function reverseStr(p) {
  let res = '';

  for (let item of p) {
    if (item === '(') res += ')';
    else res += '(';
  }

  return res;
}

function rightStr(p) {
  const stack = [];

  for (let item of p) {
    if (item === '(') stack.push(item);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  if (stack.length === 0) return true;
  else return false;
}

function splitStr(p) {
  const len = p.length;
  let o = 0;
  let c = 0;
  let u = '';

  for (let i = 0; i < len; i++) {
    if (p[i] === '(') o += 1;
    else c += 1;

    u += p[i];

    // o + c < len 조건을 작성하는 이유는 p.slice(i + 1)에서 i 전부를 돌면 i는 p의 len전가지의 index를 가지고 있으며 만약 i가 i < len 전체를 돌면 p.slice(i + 1) = undefined가 되는 문제를 방지하기 위한 조건
    if (o === c && o + c < len) {
      return [u, p.slice(i + 1)];
    }
  }

  return [u, ''];
}

function solve(p) {
  if (p === '') return '';

  let [u, v] = splitStr(p);

  if (rightStr(u)) {
    return u + solve(v);
  } else {
    u = u.slice(1, -1);
    u = reverseStr(u);

    return '(' + solve(v) + ')' + u;
  }
}

function solution(p) {
  return solve(p);
}

const p = '()))((()';

console.log(solution(p));

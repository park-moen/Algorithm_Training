function solution(number, k) {
  const stack = [];

  for (const el of number) {
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }

    stack.push(el);
  }

  return stack.slice(0, stack.length - k).join('');
}

const number = '1231234';
const k = 3;

solution(number, k);

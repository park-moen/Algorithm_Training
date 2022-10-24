function solution2(number, k) {
  const stack = [];
  let answer = '';

  for (let i = 0; i < number.length; i++) {
    const el = number[i];

    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }

    stack.push(el);
  }

  stack.splice(stack.length - k, k);
  answer = stack.join('');

  return answer;
}

const number1 = '1231234';
const k1 = 3;

const number2 = '4177252841';
const k2 = 4;

const number3 = '777';
const k3 = 1;

solution2(number3, k3);

function solution(str) {
  let answer = 0;

  for (let value of str) {
    if (!isNaN(value)) {
      answer = answer * 10 + Number(value);
    }
  }

  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

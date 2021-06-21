function solution(str) {
  let answer = '';

  for (let val of str) {
    if (!isNaN(val)) answer = answer * 10 + Number(val);
  }
  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

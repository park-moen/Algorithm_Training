function solution(str) {
  let answer = 0;

  for (let val of str) {
    if (val.charCodeAt() >= 48 && val.charCodeAt() <= 57) {
      answer = answer * 10 + Number(val);
    }
  }

  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

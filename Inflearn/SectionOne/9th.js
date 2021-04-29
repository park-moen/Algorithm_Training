function solution(s) {
  let answer = '';

  for (let val of s) {
    if (val === 'A') answer += '#';
    else answer += val;
  }

  return answer;
}

let str = 'BANANA';
console.log(solution(str));

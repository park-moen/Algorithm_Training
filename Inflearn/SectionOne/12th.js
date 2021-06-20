// 2가지 방법 작성

function solution(s) {
  let answer = '';

  for (let val of s) {
    if (val === val.toLowerCase()) answer += val.toUpperCase();
    else answer += val;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));

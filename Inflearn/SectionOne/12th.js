function solution(s) {
  let answer = '';

  for (let val of s) {
    if (val !== val.toUpperCase()) {
      val = val.toUpperCase();
    }
    answer += val;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));

function solution(s) {
  let answer = '';

  for (let val of s) {
    if (val !== val.toUpperCase()) val = val.toUpperCase();
    else val = val.toLowerCase();

    answer += val;
  }

  return answer;
}

console.log(solution('StuDY'));

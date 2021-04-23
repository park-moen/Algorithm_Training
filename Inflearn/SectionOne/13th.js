function solution(s) {
  let answer = '';
  for (let value of s) {
    if (value === value.toUpperCase()) answer += value.toLowerCase();
    else answer += value.toUpperCase();
  }

  return answer;
}

console.log(solution('StuDY'));

function solution(s) {
  let answer = '';

  for (let val of s) {
    if (val === val.toUpperCase()) answer += val.toLowerCase();
    else answer += val.toUpperCase();
  }

  return answer;
}

console.log(solution('StuDY'));

function solution(str, val) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}
console.log(solution('ksekkset', 'k'));

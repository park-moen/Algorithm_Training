function solution(str, val) {
  let answer = 0;
  let pos = str.indexOf(val);
  while (pos !== -1) {
    console.log(pos);
    pos = str.indexOf(val, pos + 1);
    answer++;
  }
  return answer;
}
console.log(solution('ksekkset', 'k'));

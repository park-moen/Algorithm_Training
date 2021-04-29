function solution(s) {
  let answer = 0;

  for (let val of s) {
    if (val === val.toUpperCase()) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

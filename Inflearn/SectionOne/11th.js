function solution(s) {
  let answer = 0;

  for (let val of s) {
    // let num = val.charCodeAt();

    // if (num >= 65 && num <= 90) answer++;

    if (val === val.toUpperCase()) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

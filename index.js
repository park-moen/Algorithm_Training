function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let temp = i;

    for (let j = i + 1; j <= n; j++) {
      console.log(j);
      temp += j;
      if (temp === n) answer++;
      else if (temp > n) break;
    }
  }

  return answer + 1;
}

const n = 15;
solution(n);

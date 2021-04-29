function solution(day, arr) {
  let answer = 0;
  day = day % 10;

  for (let val of arr) {
    if (val % 10 === day) answer++;
  }

  return answer;
}

arr = [25, 22, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

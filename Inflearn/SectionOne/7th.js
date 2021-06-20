function solution(day, arr) {
  let answer = 0;

  for (let val of arr) {
    if (val % 10 === day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr));
console.log(solution(0, arr2));

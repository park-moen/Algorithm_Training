function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let rt = 0;
  let sum = 0;

  while (true) {
    if (rt > arr.length) break;

    if (sum < m) sum += arr[rt++];
    else sum -= arr[lt++];

    if (sum === m) answer++;
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

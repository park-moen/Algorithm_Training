function count(stable, dist) {
  let cnt = 1;
  let endPoint = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPoint >= dist) {
      cnt++;
      endPoint = stable[i];
    }
  }

  return cnt;
}

function solution(c, stable) {
  let answer;

  stable.sort((a, b) => a - b);

  let left = 1;
  let right = stable[stable.length - 1];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (count(stable, mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

let arr = [5, 6, 8, 12, 14];
console.log(solution(3, arr));

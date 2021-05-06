function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let time_line = [];

  for (let val of times) {
    time_line.push([val[0], 'start']);
    time_line.push([val[1], 'end']);
  }

  time_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;

  for (let val of time_line) {
    if (val[1] === 'start') cnt++;
    else cnt--;

    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

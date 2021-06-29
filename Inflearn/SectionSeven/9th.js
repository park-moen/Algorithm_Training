function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  const T_line = [];

  for (let val of times) {
    T_line.push([val[0], 's']);
    T_line.push([val[1], 'e']);
  }

  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;

  for (let time of T_line) {
    if (time[1] === 's') cnt++;
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

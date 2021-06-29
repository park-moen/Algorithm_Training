function solution(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = 0;

  for (let time of meeting) {
    if (time[0] >= et) {
      et = time[1];
      answer++;
    }
  }

  return answer;
}

let arr1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [2, 3],
  [1, 3],
];
console.log(solution(arr1));

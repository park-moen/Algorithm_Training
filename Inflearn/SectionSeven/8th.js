function solution(meeting) {
  let answer = 0;
  let endTime = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let value of meeting) {
    if (value[0] >= endTime) {
      answer++;
      endTime = value[1];
    }
  }

  return answer;
}

// [ [ 2, 3 ], [ 1, 4 ], [ 3, 5 ], [ 4, 6 ], [ 5, 7 ] ]

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));

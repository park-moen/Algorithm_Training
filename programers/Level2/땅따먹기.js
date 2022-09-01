function solution(land) {
  let answer = Math.max(...land[0]);
  let maxIndex = land[0].findIndex(value => value === answer);

  for (let i = 1; i < land.length; i++) {
    land[i].splice(maxIndex, 1);

    let maxValue = Math.max(...land[i]);

    maxIndex = land[i].findIndex(value => value === maxValue);
    answer += maxValue;
  }

  console.log(answer);

  return answer;
}

const land = [
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
];

solution(land);

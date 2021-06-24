function solution(test) {
  let answer = 0;
  let temp = [];
  const testLen = test.length;
  const studentLen = test[0].length;

  for (let i = 1; i <= studentLen; i++) {
    for (let j = 1; j <= studentLen; j++) {
      if (i === j) continue;
      let cnt = 0;

      for (let k = 0; k < testLen; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < studentLen; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }

        if (pj > pi) cnt++;
      }

      if (cnt === testLen) {
        answer++;
        temp.push([i, j]);
      }
    }
  }

  console.log(temp);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

function solution(N, stages) {
  const answer = [];
  let len = stages.length;

  for (let i = 1; i <= N; i++) {
    // i = 1, 2, 3, 4, 5
    let count = stages.filter(el => el === i).length;
    let failRatio = 0;

    if (count === 0) failRatio = 0;
    else failRatio = count / len;

    len -= count;
    answer.push({ stage: i, fail: failRatio });
  }

  answer.sort((a, b) => {
    if (a.fail > b.fail) return -1;
    else if (a.fail < b.fail) return 1;
    else {
      if (a.stage < b.stage) return 1;
    }
  });

  return answer.map(v => v.stage);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));

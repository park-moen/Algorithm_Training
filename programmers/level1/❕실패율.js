// ? 현재 코드 시간 복잡도: O(N × M) - 최악의 경우: 500 × 200,000 = 100,000,000 연산
function solution(N, stages) {
  const percentHash = new Map();

  // ! queue로 풀면 시간 복잡도가 줄어들지 않을까?
  for (let stage = 1; stage <= N; stage += 1) {
    const stageHash = stages.reduce(
      (acc, cur) => {
        if (cur === stage) {
          acc.current += 1;
        }

        if (cur >= stage) {
          acc.clear += 1;
        }

        return acc;
      },
      { current: 0, clear: 0 }
    );

    const percent = stageHash.current / stageHash.clear;
    percentHash.set(stage, percent);
  }

  return [...percentHash.entries()]
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }

      return b[1] - a[1];
    })
    .map(([stage]) => stage);
}

function secondSolution(N, stages) {
  const challengers = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challengers[stage] += 1;
  }

  const failures = [];
  let totalPlayers = stages.length;
  for (let stage = 1; stage <= N; stage += 1) {
    if (totalPlayers === 0) {
      failures.push([stage, 0]);
    } else {
      const failureRate = challengers[stage] / totalPlayers;
      failures.push([stage, failureRate]);
      totalPlayers -= challengers[stage];
    }
  }

  return failures.sort((a, b) => b[1] - a[1] || a[0] - b[0]).map(([stage]) => stage);
}

function thirdSolution(N, stages) {
  const challengers = stages.reduce((acc, stage) => {
    acc[stage] = (acc[stage] || 0) + 1;
    return acc;
  }, {});

  const failures = [];
  let totalPlayers = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    const currentStageCount = challengers[stage] || 0;
    failures.push([
      stage,
      totalPlayers === 0 ? 0 : currentStageCount / totalPlayers,
    ]);
    totalPlayers -= currentStageCount;
  }

  return failures.sort((a, b) => b[1] - a[1] || a[0] - b[0]).map(([stage]) => stage);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
console.log(secondSolution(N, stages));
console.log(thirdSolution(N, stages));

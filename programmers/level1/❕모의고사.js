function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const hash = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
  ]);

  answers.forEach((answer, idx) => {
    if (answer === first[idx % first.length]) {
      hash.set(1, hash.get(1) + 1);
    }

    if (answer === second[idx % second.length]) {
      hash.set(2, hash.get(2) + 1);
    }

    if (answer === third[idx % third.length]) {
      hash.set(3, hash.get(3) + 1);
    }
  });

  const result = [];
  const max = Math.max(...hash.values());

  for (const [key, value] of hash.entries()) {
    if (max === value) {
      result.push(key);
    }
  }

  return [...hash.entries()]
    .filter(([_, value]) => value === max)
    .map(([key, _]) => key)
    .sort((a, b) => a - b);
}

function secondSolution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = patterns.map(
    pattern =>
      answers.filter((answer, idx) => answer === pattern[idx % pattern.length])
        .length
  );

  const maxScore = Math.max(...scores);

  return scores
    .map((score, idx) => (score === maxScore ? idx + 1 : null))
    .filter(v => v !== null);
}

const answers = [1, 3, 2, 4, 2];
// console.log(solution(answers));
console.log(secondSolution(answers));

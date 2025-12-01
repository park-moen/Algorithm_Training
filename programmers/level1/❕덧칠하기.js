function solution(n, m, section) {
  const wall = Array.from({ length: n }, () => true);

  section.forEach(value => {
    wall[value - 1] = false;
  });

  let count = 0;
  for (let i = 0; i < wall.length; i++) {
    if (wall[i] === false) {
      wall.fill(true, i, i + m);
      count++;
    }
  }

  return count;
}

function secondSolution(n, m, section) {
  let count = 0;
  let painted = 0;

  for (const pos of section) {
    if (pos > painted) {
      count++;
      painted = pos + m - 1;
    }
  }

  return count;
}

const n = 8;
const m = 4;
const section = [2, 3, 6];

console.log(solution(n, m, section));

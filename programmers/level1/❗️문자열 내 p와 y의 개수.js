function solution(s) {
  const lowerCaseString = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'p') {
      pCount++;
    }

    if (lowerCaseString[i] === 'y') {
      yCount++;
    }
  }

  return pCount === yCount;
}

// console.log(solution('Pyy'));

function secondSolution(s) {
  const lower = s.toLowerCase();
  const count = [...lower].reduce(
    (acc, char) => {
      if (char === 'p') acc.p += 1;
      if (char === 'y') acc.y += 1;
      return acc;
    },
    { p: 0, y: 0 }
  );

  return count.p === count.y;
}

secondSolution('Pyy');

function thirdSolution(s) {
  const lower = s.toLowerCase();

  return (lower.match(/p/g) ?? []).length === (lower.match(/y/g) ?? []).length;
}

thirdSolution('Ppy');

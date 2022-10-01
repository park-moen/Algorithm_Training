function solution1(s) {
  let pCount = 0;
  let yCount = 0;
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p') {
      pCount++;
    }

    if (s[i] === 'y') {
      yCount++;
    }
  }

  if (pCount === yCount) {
    return true;
  } else {
    return false;
  }
}

function solution2(s) {
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}

const s1 = 'pPoooyY';
const s2 = 'Pyy';

solution1(s1);
solution2(s2);

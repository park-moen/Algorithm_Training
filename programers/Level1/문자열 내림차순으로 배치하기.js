function solution1(s) {
  return s
    .split('')
    .sort((a, b) => (a > b ? -1 : 1))
    .join('');
}

function solution2(s) {
  return s
    .split('')
    .sort((a, b) => {
      if (a > b) return -1;
      else if (b > a) return 1;
      else return 0;
    })
    .join('');
}

function solution3(s) {
  return s.split('').sort().reverse().join('');
}

const s = 'Zbcdefg';

console.log(solution1(s));
console.log(solution2(s));
console.log(solution3(s));

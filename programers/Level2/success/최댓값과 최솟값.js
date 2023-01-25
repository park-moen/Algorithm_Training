function solution(s) {
  const numberArray = s.split(' ').map(string => parseInt(string));
  const min = Math.min(...numberArray);
  const max = Math.max(...numberArray);

  return `${min} ${max}`;
}

const s = '1 2 3 4';

solution(s);

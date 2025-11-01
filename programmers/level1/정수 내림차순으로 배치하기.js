function solution(n) {
  return Number(String(n).split('').sort().reverse().join(''));
}

solution(1180372);

function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');

  if (s !== s.split('').reverse().join('')) return 'NO';

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

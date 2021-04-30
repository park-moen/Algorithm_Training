function solution(s) {
  let answer = 'YES';
  const temp = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const len = temp.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (temp[i] !== temp[len - 1 - i]) return 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

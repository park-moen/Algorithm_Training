// 2가지 방법이 존재합니다.

function solution(s) {
  let answer = 'YES';
  let unityStr = s.toLowerCase().replace(/[^a-z]/g, '');

  if (unityStr.split('').reverse().join('') !== unityStr) return 'NO';

  // const len = unityStr.length;

  // for (let i = 0; i < parseInt(len / 2); i++) {
  //   if (unityStr[i] !== unityStr[len - i - 1]) return 'NO';
  // }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

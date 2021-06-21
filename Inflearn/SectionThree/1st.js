function solution(s) {
  let answer = 'YES';
  const unityStr = s.toLowerCase();
  const len = unityStr.length;

  for (let i = 0; i < parseInt(len / 2); i++) {
    if (unityStr[i] !== unityStr[len - i - 1]) return 'NO';
  }

  return answer;
}

let str1 = 'gooG';
let str2 = 'aHa';
let str3 = 'dewEd';
console.log(solution(str1));

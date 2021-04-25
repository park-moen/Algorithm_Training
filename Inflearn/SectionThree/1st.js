function solution(s) {
  let answer = 'YES';
  const len = s.length;
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO';
  }

  return answer;
}

let str1 = 'gooD';
let str2 = 'aHa';
let str3 = 'dewEe';
console.log(solution(str2));

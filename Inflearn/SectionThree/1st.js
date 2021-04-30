function solution(s) {
  let answer = 'YES';
  let temp = s.toLowerCase();
  const len = temp.length;

  for (let i = 0; i < parseInt(len / 2); i++) {
    if (temp[i] !== temp[len - i - 1]) return 'NO';
  }

  return answer;
}

let str1 = 'gooG';
let str2 = 'aHa';
let str3 = 'dewEd';
console.log(solution(str3));

// 틀린 답안

// // 한 쌍인지 검사
// function isPair(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i + 1]) return true;
//   }

//   return false;
// }

// // 같은 알파벳 한 쌍 제거 후, 남은 알파벳 이어 붙이기
// function modifyString(s) {
//   let tempStr = [...s];

//   for (let i = 0; i < tempStr.length; i++) {
//     if (s[i] === s[i + 1]) {
//       tempStr.splice(i, 2);
//       break;
//     }
//   }

//   return tempStr.join('');
// }

// function solution(s) {
//   if (s.length === 0) return 0;

//   const answer = 1;

//   while (s.length) {
//     if (!isPair(s)) return 0;

//     s = modifyString(s);
//   }

//   return answer;
// }

// 시간 초과 답안
// function solution(s) {
//   const transformStringToArray = s.split('');
//   let i = 0;

//   while (true) {
//     if (transformStringToArray[i] === transformStringToArray[i + 1]) {
//       transformStringToArray.splice(i, 2);

//       i = 0;
//     } else {
//       i++;
//     }

//     if (i >= s.length || transformStringToArray.length === 0) {
//       break;
//     }
//   }

//   if (transformStringToArray.length === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

function solution(s) {
  if (s.length % 2 !== 0) return 0;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}

function solution2(s) {
  if (s.length % 2 !== 0) return 0;

  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}

const s1 = 'baabaa'; // 1
const s2 = 'cdcd'; // 0
const s3 = 'abccba'; // 1
const s4 = 'abcccba'; // 0
const s5 = 'abccccbaaa'; // 1
const s6 = 'abccaabaa'; // 0
const s7 = 'a'; // 0

console.log(solution(s5));
console.log(solution2(s3));

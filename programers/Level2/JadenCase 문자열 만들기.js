// toUpperCase, toLowerCase 내부 함수는 숫자 문자열, 특수문자, 공백은 아무 변경을 시키지 않는다는 점을 알고 있으면 쉽게 풀 수 있는 문제

function solution(s) {
  let answer = s[0].toUpperCase();

  for (let i = 1; i < s.length; i++) {
    console.log('s[i - 1]:', s[i - 1], 's[i]:', s[i]);

    if (s[i - 1] === ' ' && s[i] !== ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }

  return answer;
}

const s = '3People unFollowed me';
const s2 = 'a a a a a  a a a a a';
const s3 = '3people  unfollowed me ';

solution(s3);

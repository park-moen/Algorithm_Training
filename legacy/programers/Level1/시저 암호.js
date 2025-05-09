function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    let changeASCII = s.charCodeAt(i);

    if (changeASCII === 32) {
      answer += ' ';
    } else {
      if (changeASCII <= 90) {
        changeASCII += n;

        if (changeASCII > 90) changeASCII -= 26;
      } else {
        changeASCII += n;

        if (changeASCII > 122) changeASCII -= 26;
      }

      answer += String.fromCharCode(changeASCII);
    }
  }

  return answer;
}

const s1 = 'AB';
const n1 = 1;

const s2 = 'z';
const n2 = 1;

const s3 = 'a B z';
const n3 = 4;

solution(s3, n3);

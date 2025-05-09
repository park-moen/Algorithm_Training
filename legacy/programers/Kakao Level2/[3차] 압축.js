function solution(msg) {
  const answer = [];
  let string = msg;
  const dictionary = [];

  for (let i = 65; i < 91; i++) {
    dictionary.push(String.fromCharCode(i));
  }

  while (string.length) {
    let w = '';

    for (let i = 1; i <= string.length; i++) {
      const c = string.substring(0, i);

      if (!dictionary.includes(c)) {
        dictionary.push(c);
        break;
      }

      w = c;
    }

    string = string.slice(w.length);
    answer.push(dictionary.indexOf(w) + 1);
  }

  return answer;
}

const msg1 = 'KAKAO';
const msg2 = 'TOBEORNOTTOBEORTOBEORNOT';
const msg3 = 'ABABABABABABABAB';

solution(msg1);

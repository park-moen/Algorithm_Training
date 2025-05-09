function solution(s) {
  const splitStr = s.split(' ');
  const answer = [];

  for (const word of splitStr) {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        str += word[i].toUpperCase();
      } else {
        str += word[i].toLowerCase();
      }
    }

    answer.push(str);
  }

  return answer.join(' ');
}

const s = 'try hello world';

solution(s);

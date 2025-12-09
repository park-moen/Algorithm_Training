function solution(s, skip, index) {
  let newWord = '';
  let newAlphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  ).filter(item => !skip.includes(item));

  for (const ns of s) {
    const nowIndex = newAlphabet.findIndex(item => item === ns);

    if (nowIndex + index > newAlphabet.length - 1) {
      let count = (nowIndex + index) % newAlphabet.length;
      newWord += newAlphabet[count];
    } else {
      newWord += newAlphabet[nowIndex + index];
    }
  }

  return newWord;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;

console.log(solution(s, skip, index));

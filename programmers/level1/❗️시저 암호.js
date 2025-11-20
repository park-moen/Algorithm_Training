function solution(s, n) {
  let result = '';

  [...s].forEach(char => {
    const code = char.charCodeAt();

    if (code === 32) {
      result += ' ';
    } else {
      let newCode;
      if (code >= 65 && code <= 90) {
        newCode = ((code - 65 + n) % 26) + 65;
      }

      if (code >= 97 && code <= 122) {
        newCode = ((code - 97 + n) % 26) + 97;
      }

      result += String.fromCharCode(newCode);
    }
  });

  return result;
}

function secondSolution(s, n) {
  const ALPHABET_COUNT = 26;
  const isUpperCase = code => code >= 65 && code <= 90;

  const shiftChar = (char, shift) => {
    const code = char.charCodeAt(0);

    if (char === ' ') return ' ';

    const base = isUpperCase(code) ? 65 : 97;

    return String.fromCharCode(((code - base + shift) % ALPHABET_COUNT) + base);
  };

  return [...s].map(char => shiftChar(char, n)).join('');
}

function thirdSolution(s, n) {
  const ALPHABET_COUNT = 26;
  const UPPER_A = 65;
  const UPPER_Z = 90;
  const LOWER_A = 97;

  const shiftChar = (char, shift) => {
    if (char === ' ') return ' ';

    const code = char.charCodeAt(0);
    const isUpper = code >= UPPER_A && code <= UPPER_Z;
    const base = isUpper ? UPPER_A : LOWER_A;

    return String.fromCharCode(((code - base + shift) % ALPHABET_COUNT) + base);
  };

  return [...s].map(char => shiftChar(char, n)).join('');
}

const s = 'a B z';
const n = 4;

console.log(solution(s, n));
console.log(secondSolution(s, n));
console.log(thirdSolution(s, n));

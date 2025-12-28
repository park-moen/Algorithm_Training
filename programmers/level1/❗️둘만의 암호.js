/**
 * @param {string} s
 * @param {string} skip
 * @param {number} index
 */

function solution(s, skip, index) {
  const TOTAL_ALPHABET_COUNT = 26;
  const CHAR_CODE_A = 97;
  const skipSet = new Set(skip.split(''));

  let result = '';

  for (const originalChar of s) {
    let currentChar = originalChar;
    let validMoveCount = 0;

    while (validMoveCount < index) {
      const charCode = currentChar.charCodeAt(0) - CHAR_CODE_A;
      const nextCharCode = (charCode + 1) % TOTAL_ALPHABET_COUNT;
      currentChar = String.fromCharCode(nextCharCode + CHAR_CODE_A);

      if (!skipSet.has(currentChar)) {
        validMoveCount++;
      }
    }

    result += currentChar;
  }

  return result;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;

solution(s, skip, index);

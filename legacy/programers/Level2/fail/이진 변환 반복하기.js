function solution(s) {
  let zeroCount = 0;
  let transformBinaryCount = 0;
  let input = s;

  while (input !== '1') {
    transformBinaryCount++;
    zeroCount += input.split('1').join('').length;
    input = input.split('0').join('').length.toString(2);
  }

  return [transformBinaryCount, zeroCount];
}

const s1 = '110010101001';
const s2 = '01110';
const s3 = '1111111';

solution(s1);

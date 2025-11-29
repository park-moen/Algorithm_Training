function decimalToBinary(decimal, n) {
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  if (binary.length < n) {
    binary = '0'.repeat(n - binary.length) + binary;
  }

  return binary;
}

function solution(n, arr1, arr2) {
  const binaryArr1 = arr1.map(value => decimalToBinary(value, n));
  const binaryArr2 = arr2.map(value => decimalToBinary(value, n));

  return binaryArr1.map((binary, i) => {
    return [...binary].reduce(
      (acc, cur, j) =>
        cur === '1' || binaryArr2[i][j] === '1' ? (acc += '#') : (acc += ' '),
      ''
    );
  });
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));

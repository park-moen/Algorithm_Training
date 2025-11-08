function solution(numbers) {
  const permutation = Array.from({ length: 10 }, (_, idx) => idx);

  return permutation.reduce(
    (acc, cur) => (!numbers.includes(cur) ? acc + cur : acc),
    0
  );
}

const numbers = [5, 8, 4, 0, 6, 7, 9];

solution(numbers);

function solution(A, B) {
  const ascendingSortA = A.sort((a, b) => a - b);
  const descendingSortB = B.sort((a, b) => b - a);

  return ascendingSortA.reduce(
    (sum, number, index) => sum + number * descendingSortB[index],
    0
  );
}

const A = [1, 2];
const B = [3, 4];

console.log(solution(A, B));

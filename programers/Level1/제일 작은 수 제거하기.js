// 배열에 동일한 숫자가 없다고 가정했을 떄 풀이
function solution1(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  const minIndex = arr.indexOf(Math.min(...arr));

  arr.splice(minIndex, 1);
  return arr;
}

// 배열에 동일한 숫자가 있고, 가장 작은 값을 모두 뺀다고 가정했을 떄 풀이
function solution2(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter(number => number !== min);

  return answer.length ? answer : [-1];
}

const arr1 = [4, 3, 2, 1, 1];
const arr2 = [10, 10, 10];

console.log(solution2(arr2));

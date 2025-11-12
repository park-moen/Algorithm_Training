function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  const minIndex = arr.indexOf(Math.min(...arr));
  const sliceArr = [...arr];

  sliceArr.splice(minIndex, 1);
  return sliceArr;
}

function secondSolution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  const min = Math.min(...arr);

  return [...arr].filter(value => value !== min);
}

const arr1 = [4, 3, 2, 1, 5];
const arr2 = [10];

// console.log(solution(arr1));
console.log(secondSolution(arr1));

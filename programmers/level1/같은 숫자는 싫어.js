function firstSolution(arr) {
  let flag = arr[0];
  const stack = [flag];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === flag) {
      continue;
    } else {
      flag = arr[i];
      stack.push(flag);
    }
  }

  return stack;
}

// console.log(firstSolution([1, 1, 3, 3, 0, 1, 1]));

function secondSolution(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}

const arr = [1, 2, 2, 3];

console.log(secondSolution(arr));

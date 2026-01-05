function solution(ingredient) {
  let cnt = 0;
  for (let i = 3; i < ingredient.length; i += 1) {
    const now = ingredient[i];
    if (
      now === 1 &&
      ingredient[i - 1] === 3 &&
      ingredient[i - 2] === 2 &&
      ingredient[i - 3] === 1
    ) {
      ingredient.splice(i - 3, 4);
      cnt += 1;
      i -= 4;
    }
  }
  return cnt;
}

/**
 *
 * @param {number[]} ingredient
 */
function secondSolution(ingredient) {
  const stack = [];
  let count = 0;

  ingredient.forEach(value => {
    stack.push(value);

    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      count++;
    }
  });

  return count;
}

/**
 *
 * @param {number[]} ingredient
 */
function thirdSolution(ingredient) {
  const stack = [];
  let count = 0;

  ingredient.forEach(value => {
    stack.push(value);

    if (stack.length >= 4) {
      const hamburger = stack.slice(-4).join('');
      console.log('hamburger', hamburger);
      console.log('end');
      if (hamburger === '1231') {
        stack.splice(-4);
        count++;
      }
    }
  });

  return count;
}

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

console.log(secondSolution(ingredient));
console.log(thirdSolution(ingredient));

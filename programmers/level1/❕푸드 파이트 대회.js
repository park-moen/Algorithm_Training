function solution(food) {
  let front = '';
  let end = '';

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      front += i + '';
    }
  }

  end = [...front].reverse().join('');

  return front + '0' + end;
}

function secondSolution(food) {
  const front = food
    .slice(1)
    .map((quantity, idx) => String(idx + 1).repeat(Math.floor(quantity / 2)))
    .join('');
  const end = [...front].reverse().join('');

  return front + '0' + end;
}

const food = [1, 3, 4, 6];
console.log(solution(food));
console.log(secondSolution(food));

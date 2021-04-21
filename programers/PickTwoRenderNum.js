function solution(numbers) {
  const answer = [];
  const { length } = numbers;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  console.log(answer);
}

solution([2, 1, 3, 4, 1]);
// solution([5, 0, 2, 7]);

// [ 1, 1, 2, 3, 4 ]

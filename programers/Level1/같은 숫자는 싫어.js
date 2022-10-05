function solution(arr) {
  const answer = [arr[0]];
  let currentValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];

    if (currentValue !== value) {
      currentValue = value;
      answer.push(value);
    }
  }

  return answer;
}

function solution2(arr) {
  return arr.filter((val, index) => val !== arr[index + 1]);
}

const arr = [4, 4, 4, 3, 3];

solution(arr);

console.log(solution2([1, 1, 3, 3, 0, 1, 1]));

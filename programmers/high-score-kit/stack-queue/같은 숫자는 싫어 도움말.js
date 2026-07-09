function solution(arr) {
  const answer = [];

  arr.forEach(num => {
    if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  });

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log('solution(arr)', solution(arr));

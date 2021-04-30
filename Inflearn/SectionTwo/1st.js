function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

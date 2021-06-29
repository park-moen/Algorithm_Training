function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let index = i;

    while (arr[index - 1] > arr[index]) {
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      index--;
    }
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

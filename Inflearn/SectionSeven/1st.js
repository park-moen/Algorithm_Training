function solution(arr) {
  let answer = arr;
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let idx = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }

    // let temp = arr[i];
    // arr[i] = arr[idx];
    // arr[idx] = temp;
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

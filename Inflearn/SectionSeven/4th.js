function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[left] > temp) {
      arr[left + 1] = arr[left];
      left--;
    }

    arr[left + 1] = temp;
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

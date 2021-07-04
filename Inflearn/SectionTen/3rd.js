function solution(arr) {
  let answer = 0;
  const dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) {
        max = dy[j];
      }
    }

    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }

  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

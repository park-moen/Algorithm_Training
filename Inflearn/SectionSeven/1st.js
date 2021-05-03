function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[temp]) temp = j;
    }

    [arr[i], arr[temp]] = [arr[temp], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

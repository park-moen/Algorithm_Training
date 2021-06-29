function solution(target, arr) {
  let answer;

  let lt = 0;
  let rt = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

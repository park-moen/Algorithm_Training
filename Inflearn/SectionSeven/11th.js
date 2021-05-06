function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let val of songs) {
    if (val + sum > capacity) {
      cnt++;
      sum = val;
    } else {
      sum += val;
    }
  }

  return cnt;
}

function solution(m, songs) {
  let answer;
  let left = Math.max(...songs);
  let right = songs.reduce((acc, cur) => acc + cur, 0);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (count(songs, mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

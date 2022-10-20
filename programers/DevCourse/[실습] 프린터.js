// shift 내장 함수를 사용해서 while문 안에서 o(n) 시간 복잡도가 추가되어 효율성 테스트에서 탈락할 수 있다.
function solution(priorities, location) {
  let count = 0;

  while (priorities.length) {
    const maxValue = Math.max(...priorities);
    const currentValue = priorities.shift();

    if (currentValue === maxValue) {
      count++;

      if (location === 0) {
        return count;
      }
    } else {
      priorities.push(currentValue);
    }

    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }
}

// 배열의 인덱스만을 사용해서 문제를 해결하는 방법(배열을 인덱스로 접근하게 된다면 시간 복잡도가 O(1)로 shift() 함수보다 성능이 좋아진다.)
// function solution2(priorities, location) {
//   let index = 0;
//   let count = 0;

//   while (priorities.length) {
//     const front = priorities[index];
//     const

//   }
// }

// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 0;

// console.log(solution(priorities, location));
// console.log(solution2(priorities, location));

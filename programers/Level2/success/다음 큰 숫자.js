// todo 비트 마스킹 기법으로 O(1) 연산으로 바꿔보자

function solution(n) {
  const flagLength = n.toString(2).split('0').join('').length;
  let copyNumber = n + 1;

  while (true) {
    const onlyOneLength = copyNumber.toString(2).split('0').join('').length;

    if (flagLength === onlyOneLength) {
      return copyNumber;
    } else {
      copyNumber++;
    }
  }
}

const n1 = 78; // 83
const n2 = 15; // 23

solution(n1);

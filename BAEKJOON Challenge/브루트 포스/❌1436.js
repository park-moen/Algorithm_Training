const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 표준 입력으로부터 데이터 읽기
const N = parseInt(input, 10);

// N번째 666이 포함된 숫자를 찾는 함수
function findNthTitle(n) {
  let count = 0; // 666이 포함된 숫자의 개수를 셀 변수
  let num = 666; // 숫자를 666부터 시작

  // N번째 666이 포함된 숫자를 찾을 때까지 반복
  while (true) {
    // 현재 숫자가 "666"을 포함하는지 확인
    if (num.toString().includes("666")) {
      count++; // 포함하면 카운트 증가
      // N번째 숫자를 찾으면 반환
      if (count === n) {
        return num;
      }
    }
    num++; // 다음 숫자로 이동
  }
}

// 결과 출력
const result = findNthTitle(N);
console.log(result);

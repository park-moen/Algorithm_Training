function firstSolution(n, w, num) {
  // 1) num의 층/위치/열
  const row = Math.floor((num - 1) / w);
  const pos = (num - 1) % w;
  const col = row % 2 === 0 ? pos : w - 1 - pos;

  // 2) 전체 층 수와 마지막 층 인덱스 정보
  const rows = Math.ceil(n / w);
  const top = rows - 1;
  let answer = rows - row; // 위로(자기 포함) 몇 층이 있는가?

  const m = n % w;
  if (m !== 0) {
    // 마지막 층이 부분만 차 있는 경우 -> 해당 열이 실제로 채워졌는지 확인
    const topIsL2R = top % 2 === 0;
    const topHasBox = topIsL2R ? col < m : col >= w - m;

    if (!topHasBox) {
      // 마지막 층에선 이 열이 비어 있으니, 실제로 위로 세야 할 층이 하나 적음
      answer -= 1;
    }
  }

  return answer;
}

console.log(firstSolution(22, 6, 11));

function solution(n) {
  const answer = [];

  function hanoi(n, from, to, via) {
    // console.log(answer);
    console.log(n, from, to, via);
    if (n === 1) {
      // N이 1일 때는 자신의 위에 원반이 없기 때문에 재귀가 필요없고 바로 원반을 옮기고 종료한다.
      answer.push([from, to]);
    } else {
      // 시작 지점에서 3번 기둥에 가장 큰 원판을 옮기기 전까지 재귀
      hanoi(n - 1, from, via, to);

      // 이후 N번 원반을 3번 기둥으로 옮긴다 :
      answer.push([from, to]);

      // N번 원판을 3번 기둥으로 옮긴 후 2번 기둥에 있는 N - 1 원판을 3번 기둥으로 옮긴다. (1번 기둥을 경우)
      hanoi(n - 1, via, to, from);
    }
  }

  hanoi(n, 'A', 'C', 'B');

  console.log(answer);
  return answer;
}

const n = 4;

solution(n);

// 한 번에 하나의 원판만 옮길 수 있습니다.
// 큰 원판이 작은 원판 위에 있어서는 안됩니다.

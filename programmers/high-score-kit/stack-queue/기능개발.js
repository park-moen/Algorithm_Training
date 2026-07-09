function solution(progresses, speeds) {
  const answer = [];

  const deployDays = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx]),
  );

  let baseDay = deployDays[0];
  let count = 0;

  for (const day of deployDays) {
    if (day <= baseDay) {
      count++;
    } else {
      answer.push(count);
      baseDay = day;
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));

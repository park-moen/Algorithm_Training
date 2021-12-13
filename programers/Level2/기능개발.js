function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  while (days.length) {
    const first = days[0];
    const count = days.findIndex(day => first < day);

    if (count !== -1) {
      answer.push(count);
      days.splice(0, count);
    } else {
      answer.push(days.length);
      days.splice(0, days.length);
    }
  }

  return answer;
}

const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];

const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];

const progresses3 = [99, 1];
const speeds3 = [1, 99];

const progresses4 = [55, 6, 65];
const speeds4 = [5, 10, 7];

const progresses5 = [55, 60, 65];
const speeds5 = [5, 10, 7];

solution(progresses4, speeds4);

// [99, 1] [1, 99] // [2]
// [55, 6, 65] [5, 10, 7] // [1, 2]
// [55,60,65] [5, 10, 7] // [3]

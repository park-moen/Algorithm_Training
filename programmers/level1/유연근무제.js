function solution(schedules, timelogs, startday) {
  let answer = 0;
  const endDay = startday + 6;
  const SATURDAY = 6;
  const SUNDAY = 7;

  for (let i = 0; i < schedules.length; i++) {
    const targetTime = schedules[i] + 10;
    let flag = true;

    for (let j = startday; j <= endDay; j++) {
      if (j === SATURDAY || j === SUNDAY) {
        continue;
      }

      if (timelogs[i][j - startday] > targetTime) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer++;
    }
  }

  console.log(answer);

  return answer;
}

const schedules1 = [700, 800, 1100];
const timelogs1 = [
  [710, 2359, 1050, 700, 650, 631, 659],
  [800, 801, 805, 800, 759, 810, 809],
  [1105, 1001, 1002, 600, 1059, 1001, 1100],
];
const startday1 = 5;

solution(schedules1, timelogs1, startday1);

const schedules2 = [730, 855, 700, 720];
const timelogs2 = [
  [710, 700, 650, 735, 700, 931, 912],
  [908, 901, 805, 815, 800, 831, 835],
  [705, 701, 702, 705, 710, 710, 711],
  [707, 731, 859, 913, 934, 931, 905],
];
const startday2 = 1;

solution(schedules2, timelogs2, startday2);

function solution(progresses, speeds) {
  let answer = [];
  const days = progresses.map((progress, idx) =>
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

function solution2(progresses, speeds) {
  const answer = [];
  const COMPLETION = 100;

  const completionDate = progresses.map((progress, index) =>
    Math.ceil((COMPLETION - progress) / speeds[index])
  );

  while (completionDate.length) {
    const deployFeature = completionDate.shift();
    let deployCount = 1;
    let flag = 0;

    for (let i = 0; i < completionDate.length; i++) {
      if (deployFeature >= completionDate[i]) {
        flag++;
        deployCount++;
      } else {
        answer.push(deployCount);
        break;
      }
    }

    for (let i = 0; i < flag; i++) {
      completionDate.shift();
    }

    if (completionDate.length === 0) {
      answer.push(deployCount);
    }
  }

  return answer;
}

function solution3(progresses, speeds) {
  const answer = [];
  const COMPLETION = 100;

  const completionDate = progresses.map((progress, index) =>
    Math.ceil((COMPLETION - progress) / speeds[index])
  );

  let maxDay = completionDate[0];
  let count = 1;

  for (let i = 1; i < completionDate.length; i++) {
    if (completionDate[i] <= maxDay) {
      count++;
    } else {
      maxDay = completionDate[i];
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];

const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];

const progresses3 = [80];
const speeds3 = [1];

const progresses4 = [20, 99, 93, 30, 55, 10];
const speeds4 = [5, 10, 1, 1, 30, 5];

const progresses5 = [96, 99, 98, 97];
const speeds5 = [1, 1, 1, 1];

const progresses6 = [40, 93, 30, 55, 60, 65];
const speeds6 = [60, 1, 30, 5, 10, 7];

const progresses7 = [93, 30, 55, 60, 40, 65];
const speeds7 = [1, 30, 5, 10, 60, 7];

const progresses8 = [55, 6, 65];
const speeds8 = [5, 10, 7];

const progresses9 = [99, 99, 99];
const speeds9 = [1, 1, 1];

solution(progresses2, speeds2);
solution2(progresses9, speeds9);
solution3(progresses4, speeds4);

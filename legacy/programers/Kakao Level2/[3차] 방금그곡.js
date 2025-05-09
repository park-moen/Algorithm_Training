function changeToken(score) {
  score = score
    .replace(/C#/g, 'c')
    .replace(/D#/g, 'd')
    .replace(/F#/g, 'f')
    .replace(/G#/g, 'g')
    .replace(/A#/g, 'a');

  return score;
}

function solution(m, musicinfos) {
  const answer = [];

  m = changeToken(m);

  for (let i = 0; i < musicinfos.length; i++) {
    let [start, end, title, score] = musicinfos[i].split(',');
    const hour = end.slice(0, 2) - start.slice(0, 2);
    const minute = end.slice(3) - start.slice(3);
    const remainTime = hour * 60 + minute;

    score = changeToken(score);

    let repeatScore = '';

    if (remainTime < score.length) {
      repeatScore = score.slice(0, remainTime);
    } else {
      repeatScore = score.repeat(remainTime / score.length);
      repeatScore += score.slice(0, remainTime % score.length);
    }

    if (repeatScore.includes(m)) {
      answer.push([title, remainTime]);
    }
  }

  answer.sort((a, b) => b[1] - a[1]);

  if (!answer.length) {
    return '(None)';
  } else {
    return answer[0][0];
  }
}

const m = 'ABC';
const musicinfos = ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'];

solution(m, musicinfos);

function solution(msg) {
  var answer = [];
  let obj = {};
  let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let max = 1;

  arr = arr.split('');

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
  }

  for (let i = 0; i < msg.length; ) {
    let w = msg[i];

    for (let j = 0; j < max; j++) {
      const tmpw = msg.substring(i, i + max - j);

      if (obj[tmpw]) {
        w = tmpw;
        break;
      }
    }

    let c = msg[i + w.length];

    if (!c) c = '';
    if (!w) break;
    if (obj[w]) {
      const sum = w + c;

      answer.push(obj[w]);
      arr.push(sum);
      obj[sum] = arr.length;
      max = max > sum.length ? max : sum.length;
      i = i + w.length;
    }
  }

  console.log(answer);
  return answer;
}

const msg1 = 'KAKAO';
const msg2 = 'TOBEORNOTTOBEORTOBEORNOT';
const msg3 = 'ABABABABABABABAB';

solution(msg1);

// for (let i = 65; i < 91; i++) {
// dictionary.push(String.fromCharCode(i));
// }

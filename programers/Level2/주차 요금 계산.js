function solution(fees, records) {
  const hash = {};
  const TWENTYFOUR = 60 * 23 + 59;

  for (let i = 0; i < records.length; i++) {
    const [time, unique, state] = records[i].split(' ');
    let changeMinutes = time.split(':');
    changeMinutes[0] = changeMinutes[0] * 60;
    changeMinutes = changeMinutes[0] + Number(changeMinutes[1]);

    if (hash[unique] === undefined) {
      hash[unique] = changeMinutes;
    } else {
      if (state === 'IN') {
        hash[unique] += changeMinutes;
      } else {
        hash[unique] -= changeMinutes;
      }
    }
  }

  for (const key in hash) {
    let minute = hash[key];

    if (minute >= 0) {
      minute = Math.abs(TWENTYFOUR - minute);
    } else {
      minute = Math.abs(minute);
    }

    if (minute <= fees[0]) {
      hash[key] = fees[1];
    } else {
      hash[key] = fees[1] + Math.ceil((minute - fees[0]) / fees[2]) * fees[3];
    }
  }

  const answer = Object.entries(hash)
    .sort((a, b) => a[0] - b[0])
    .map(records => records[1]);

  return answer;
}

const fees = [1, 10, 1, 11];
const records = ['00:00 1234 IN', '00:02 1234 OUT'];

// 0000 -
// 0148 - 670

solution(fees, records);

// 시각을 기준으로 오름 차순으로 정렬
// 마지막 시각(23:59)에 입차되는 경우는 입력으로 주어지지 않습니다.
// 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return

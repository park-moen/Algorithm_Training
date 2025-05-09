function solution1(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length; i++) {
    if (phone_number.length - (i + 1) >= 4) {
      answer += '*';
    } else {
      answer += phone_number[i];
    }
  }

  return answer;
}

function solution2(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

const phone_number = '027776789';

solution1(phone_number);
solution2(phone_number);

function solution(phone_number) {
  const replacePhoneNumberLen = phone_number.length - 4;
  let result = [];

  for (let i = 0; i < phone_number.length; i++) {
    if (i < replacePhoneNumberLen) {
      result.push('*');
    } else {
      result.push(phone_number[i]);
    }
  }

  return result.join('');
}

function secondSolution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

function thirdSolution(phone_number) {
  return [...phone_number].fill('*', 0, phone_number.length - 4).join('');
}

const phone_number = '027778888';

solution(phone_number);
secondSolution(phone_number);
thirdSolution(phone_number);

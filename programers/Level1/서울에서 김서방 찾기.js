function solution1(seoul) {
  const kimIndex = seoul.findIndex(familyName => familyName === 'Kim');

  return `김서방은 ${kimIndex}에 있다`;
}

function solution2(seoul) {
  const kimIndex = seoul.indexOf('Kim');

  return `김서방은 ${kimIndex}에 있다`;
}

const seoul = ['park', 'Jane', 'Kim'];

console.log(solution1(seoul));
console.log(solution2(seoul));

function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const weekIdx = new Date(`2016-${a}-${b}`).getDay();

  return week[weekIdx];
}

function secondeSolution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let totalDays = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDays += monthDays[i];
  }
  totalDays += b;

  const dayIdx = (5 + totalDays - 1) % 7;

  return days[dayIdx];
}

console.log(solution(5, 24));
console.log(secondeSolution(5, 24));

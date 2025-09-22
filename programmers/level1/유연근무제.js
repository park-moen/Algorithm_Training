// @ts-nocheck
function solution(schedules, timelogs, startday) {
  const getCutoffTime = time => {
    let hour = Math.floor(time / 100);
    let minute = (time % 100) + 10;

    if (minute >= 60) {
      hour += 1;
      minute -= 60;
    }

    return hour * 100 + minute;
  };

  let rewardedEmployeeCount = 0;

  for (let employeeIndex = 0; employeeIndex < schedules.length; employeeIndex++) {
    const cutoffTime = getCutoffTime(schedules[employeeIndex]);
    let allWeekdaysOnTime = true;

    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
      const currentDayOfWeek = ((startday - 1 + dayOffset) % 7) + 1;

      if (currentDayOfWeek === 6 || currentDayOfWeek === 7) continue;

      const actualArrival = timelogs[employeeIndex][dayOffset];

      if (actualArrival > cutoffTime) {
        allWeekdaysOnTime = false;
        break;
      }
    }

    if (allWeekdaysOnTime) {
      rewardedEmployeeCount++;
    }
  }

  return rewardedEmployeeCount;
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

// solution(schedules2, timelogs2, startday2);

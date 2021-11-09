const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(v => +v);
const operator = input[2].split(' ').map(v => +v);

function solution(nums, opr, n) {
  let maxValue = Number.MIN_SAFE_INTEGER;
  let minValue = Number.MAX_SAFE_INTEGER;

  function dfs(L, nowData) {
    console.log(
      `L: ${L},`,
      `nowData: ${nowData},`,
      `opr: ${opr},`,
      `nums: [ ${nums} ]`
    );
    console.log('');
    if (L === n) {
      maxValue = Math.max(maxValue, nowData);
      minValue = Math.min(minValue, nowData);
    } else {
      if (opr[0] > 0) {
        opr[0] -= 1;
        dfs(L + 1, nowData + nums[L]);
        opr[0] += 1;
      }
      if (opr[1] > 0) {
        opr[1] -= 1;
        dfs(L + 1, nowData - nums[L]);
        opr[1] += 1;
      }
      if (opr[2] > 0) {
        opr[2] -= 1;
        dfs(L + 1, nowData * nums[L]);
        opr[2] += 1;
      }
      if (opr[3] > 0) {
        opr[3] -= 1;
        dfs(L + 1, parseInt(nowData / nums[L]));
        opr[3] += 1;
      }
    }
  }

  dfs(1, nums[0]);

  console.log([maxValue, minValue].join('\n'));
}

solution(numbers, operator, n);

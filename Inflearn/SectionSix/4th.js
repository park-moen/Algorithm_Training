function solution(s) {
  let answer;
  let stack = [];

  for (let val of s) {
    if (!isNaN(val)) stack.push(Number(val));
    else {
      let rt = stack.pop();
      let lt = stack.pop();

      if (val === '+') stack.push(lt + rt);
      else if (val === '-') stack.push(lt - rt);
      else if (val === '*') stack.push(lt * rt);
      else if (val === '/') stack.push(lt / rt);
    }
  }

  answer = stack[0];

  return answer;
}

let str = '352+*9-';
console.log(solution(str));

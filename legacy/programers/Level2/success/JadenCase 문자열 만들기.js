function solution(s) {
  let result = s[0].toUpperCase();

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === ' ') {
      result += s[i].toUpperCase();
    }

    if (s[i - 1] !== ' ') {
      result += s[i].toLowerCase();
    }
  }

  return result;
}

const s = '3people unFollowed me';

console.log(solution(s));

console.log(
  '3people UnFollowed Me',
  '3people Unfollowed Me',
  '3people UnFollowed Me'
);

/**
 *
 * @param {string} new_id
 */
function solution(new_id) {
  let result = new_id.toLowerCase();

  result = result.replaceAll(/[^a-z0-9\-_.]/g, '');
  result = result.replaceAll(/\.+/g, '.');
  result = result.replaceAll(/^\.|\.$/g, '');

  if (result.length === 0) {
    result = 'a';
  }

  if (result.length >= 16) {
    result = result.slice(0, 15);
    result = result.replace(/\.$/, '');
  }

  while (result.length <= 2) {
    result += result[result.length - 1];
  }

  return result;
}

const new_id = 'z-+.^.';

console.log(solution(new_id));

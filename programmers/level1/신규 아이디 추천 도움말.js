function convertToLowerCase(id) {
  return id.toLocaleLowerCase();
}

function filterAllowedCharacters(id) {
  let result = '';

  for (const char of id) {
    if (
      (char.charCodeAt(0) <= 122 && char.charCodeAt(0) >= 97) ||
      (char.charCodeAt(0) <= 57 && char.charCodeAt(0) >= 48) ||
      ['-', '_', '.'].some(keyword => keyword === char)
    ) {
      result += char;
    }
  }

  return result;
}

function normalizeDots(id) {
  let result = '';
  let prev = '';
  for (let i = 0; i < id.length; i++) {
    if (id[i] !== '.' || prev !== '.') {
      result += id[i];
    }
    prev = id[i];
  }
  return result;

  // string.prototype.replace 함수 + 정규표현식으로 간단하게 dots 중복 방지
  // return id.replace(/\.{2,}/g, '.');
}

function trimDots(id) {
  let result = [...id];

  if (result[0] === '.') {
    result = result.slice(1);
  }

  if (result[result.length - 1] === '.') {
    result.pop();
  }

  return result.join('');
}

function fillIfEmpty(id) {
  let result = id;

  if (id === '') {
    result = 'a';
  }

  return result;
}

function enforceMaxLength(id) {
  let result = [...id];

  if (result.length >= 16) {
    result = result.slice(0, 15);
  }

  if (result[result.length - 1] === '.') {
    result.pop();
  }

  return result.join('');
}

function podToMinLength(id) {
  if (id.length > 2) {
    return id;
  }

  if (typeof id === 'string') {
    return id + id[id.length - 1].repeat(3 - id.length);
  }
}

function solution(new_id) {
  let result = convertToLowerCase(new_id);
  console.log(result, 'condi 1');

  result = filterAllowedCharacters(result);
  console.log(result, 'condi 2');

  result = normalizeDots(result);
  console.log(result, 'condi 3');

  result = trimDots(result);
  console.log(result, 'condi 4');

  result = fillIfEmpty(result);
  console.log(result, 'condi 5');

  result = enforceMaxLength(result);
  console.log(result, 'condi 6');

  result = podToMinLength(result);
  console.log(result, 'condi 7');
}

const input = 'z-+.^.';
solution(input);

// const input = [
//   '...!@BaT#*..y.abcdefghijklm',
//   'z-+.^.',
//   '=.=',
//   '123_.def',
//   'abcdefghijklmn.p',
// ];

function isString(s1, s2) {
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();

  if (
    s1.charCodeAt() <= 90 &&
    s1.charCodeAt() >= 65 &&
    s2.charCodeAt() <= 90 &&
    s2.charCodeAt() >= 65
  ) {
    return true;
  }

  return false;
}

function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  const CONSTANT = 65536;

  for (let i = 1; i < str1.length; i++) {
    if (isString(str1[i - 1], str1[i])) {
      x1 = str1[i - 1] + str1[i];
      arr1.push(x1.toUpperCase());
    }
  }

  for (let i = 1; i < str2.length; i++) {
    if (isString(str2[i - 1], str2[i])) {
      x2 = str2[i - 1] + str2[i];
      arr2.push(x2.toUpperCase());
    }
  }

  const temp = arr1.slice();
  const union = arr1.slice();
  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    if (!temp.includes(arr2[i])) {
      union.push(arr2[i]);
    } else {
      intersection.push(arr2[i]);
      temp.splice(temp.indexOf(arr2[i]), 1);
    }
  }

  const similarity =
    intersection.length === union.length ? 1 : intersection.length / union.length;

  return parseInt(similarity * CONSTANT);
}

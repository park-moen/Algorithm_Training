/**
 * * @see https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function (s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return cleaned === cleaned.split('').reverse().join('');
};

var isPalindrome2 = function (s) {
  const lower = s.toLowerCase();
  let cleaned = '';

  for (const char of lower) {
    const charCode = char.charCodeAt();

    if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
      cleaned += char;
    }
  }

  return cleaned === cleaned.split('').reverse().join('');
};

function isAlphanumeric(char) {
  return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}

// "정규식이나 필터링 방식은 cleaned 문자열을 새로 만들어야 해서 O(n) 공간이 필요합니다. Two Pointer는 원본 문자열에서 바로 비교하기 때문에 추가 공간 없이 O(1)로 해결할 수 있습니다."
var isPalindrome3 = function (s) {
  const lower = s.toLowerCase();
  let left = 0;
  let right = lower.length - 1;

  while (left < right) {
    const leftChar = lower[left];
    const rightChar = lower[right];

    if (!isAlphanumeric(leftChar)) {
      left++;
    } else if (!isAlphanumeric(rightChar)) {
      right--;
    } else {
      if (leftChar === rightChar) {
        left++;
        right--;
      } else {
        return false;
      }
    }
  }

  return true;
};

const s = 'A man, a plan, a canal: Panama';

isPalindrome1(s);
isPalindrome2(s);
isPalindrome3(s);

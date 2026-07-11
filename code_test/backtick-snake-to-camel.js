/**
 * Snake Case to Camel Case in Backtick-Wrapped Identifiers
 *
 * 문장(설명 텍스트) 안에 함수명, 변수명, 인자명, 상수명이
 * 백틱(`)으로 감싸진 형태로 등장합니다. 예를 들면:
 *
 *   "Function `calculate_total_price` receives arguments
 *    `item_price`, `tax_rate` and constant `MAX_DISCOUNT`."
 *
 * 이 문자열에서, 백틱으로 감싸진 각 식별자에 대해 다음 규칙을 적용하세요.
 *
 * 1. 식별자가 "소문자를 포함한 snake_case"라면 (함수명/변수명/인자명)
 *    → camelCase로 변환합니다.
 *    (예: `calculate_total_price` → `calculateTotalPrice`)
 *
 * 2. 식별자가 "전부 대문자로만 이루어진 snake_case"라면 (상수)
 *    → 변환하지 않고 원래 그대로 유지합니다.
 *    (예: `MAX_DISCOUNT` → `MAX_DISCOUNT`)
 *
 * 백틱 바깥의 일반 텍스트(설명 문장)는 그대로 둡니다.
 * 변환된 식별자도 원래처럼 백틱으로 다시 감싸서 반환합니다.
 *
 * Example 1:
 * Input:
 *   "Function `calculate_total_price` receives arguments
 *    `item_price`, `tax_rate` and constant `MAX_DISCOUNT`."
 * Output:
 *   "Function `calculateTotalPrice` receives arguments
 *    `itemPrice`, `taxRate` and constant `MAX_DISCOUNT`."
 *
 * Example 2:
 * Input:
 *   "Call `get_user_data` with `USER_ID` and `default_locale`."
 * Output:
 *   "Call `getUserData` with `USER_ID` and `defaultLocale`."
 *
 * Constraints:
 * - 입력 문자열의 길이는 1 이상 10^4 이하
 * - 백틱 안 식별자는 알파벳(대소문자), 숫자, 언더스코어(_)로만 구성됨
 * - "상수"란 알파벳이 전부 대문자인 토큰을 의미함 (소문자가 하나도 없으면 상수로 간주)
 * - 백틱 바깥 텍스트에는 변환 규칙을 적용하지 않음
 *
 * 이 풀이는 정규표현식(regex) 없이, 문자열 순회 + 기본 메서드(indexOf, slice, split)만으로 구현합니다.
 */

/**
 * snake_case 토큰 하나를 camelCase로 변환 (regex 미사용)
 * @param {string} token
 * @return {string}
 */
const snakeToCamel = function (token) {
  const parts = token.split('_');
  let camel = parts[0];

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (part.length === 0) continue; // 연속된 언더스코어(__) 방지
    camel += part.charAt(0).toUpperCase() + part.slice(1);
  }

  return camel;
};

/**
 * 토큰이 상수(전부 대문자)인지 확인 (regex 미사용)
 * @param {string} token
 * @return {boolean}
 */
const isConstantToken = function (token) {
  return token === token.toUpperCase();
};

/**
 * @param {string} text
 * @return {string}
 */
const convertBacktickIdentifiers = function (text) {
  let result = '';
  let i = 0;

  while (i < text.length) {
    if (text[i] === '`') {
      const end = text.indexOf('`', i + 1);

      if (end === -1) {
        // 닫는 백틱이 없으면 나머지를 그대로 붙이고 종료
        result += text.slice(i);
        break;
      }

      const token = text.slice(i + 1, end);
      const converted = isConstantToken(token) ? token : snakeToCamel(token);

      result += '`' + converted + '`';
      i = end + 1;
    } else {
      result += text[i];
      i++;
    }
  }

  return result;
};

// ---- 테스트 케이스 ----

const text1 =
  'Function `calculate_total_price` receives arguments `item_price`, `tax_rate` and constant `MAX_DISCOUNT`.';
console.log(convertBacktickIdentifiers(text1));
// 예상 출력: "Function `calculateTotalPrice` receives arguments `itemPrice`, `taxRate` and constant `MAX_DISCOUNT`."

const text2 = 'Call `get_user_data` with `USER_ID` and `default_locale`.';
console.log(convertBacktickIdentifiers(text2));
// 예상 출력: "Call `getUserData` with `USER_ID` and `defaultLocale`."

const text3 = 'No backticks here, just plain text with snake_case_words.';
console.log(convertBacktickIdentifiers(text3));
// 예상 출력: "No backticks here, just plain text with snake_case_words." (백틱 없으니 변환 안 됨)

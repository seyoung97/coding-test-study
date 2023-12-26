// calculator
// 문제
// 문자열 계산식을 입력받는 계산기를 만들려고 합니다.
// 계산식은 덧셈(+), 뺄셈(-), 숫자로만 이루어져 있습니다.
// 계산식 s가 주어질 때, 계산식의 계산 결과를 출력하는 함수, solution을 완성해주세요.
//  예를 들어, s가 `-3+26-7`로 주어질 때, 계산식의 계산 결과는 16 (-3 + 26 -7)입니다.

// find common characters
// 문제
// 문자열 배열 arr가 있습니다.
// 이 문자열들의 공통된 문자를 오름차순으로 출력하는 함수, solution을 완성해주세요.
// 예를 들어, arr ['apple', 'naver']가 있을 때,
// 공통된 문자는 ['a', 'e'] 입니다.

function solution(arr) {
  // 배열이 비어있거나 첫 번째 문자열이 비어있으면 빈 배열 반환
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }

  // 첫 번째 문자열을 기준으로 공통된 문자를 저장할 Set을 생성
  const commonChars = new Set(arr[0]);

  // 나머지 문자열과 비교하여 공통된 문자를 구함
  for (let i = 1; i < arr.length; i++) {
    const currentChars = new Set(arr[i]);
    // 현재 문자열의 문자 중 commonChars에 포함된 것만 남김
    commonChars.forEach((char) => {
      if (!currentChars.has(char)) {
        commonChars.delete(char);
      }
    });

    // 만약 commonChars가 비어있다면 더 이상 공통된 문자가 없으므로 바로 반환
    if (commonChars.size === 0) {
      return [];
    }
  }

  // Set을 배열로 변환하여 오름차순 정렬 후 반환
  return Array.from(commonChars).sort();
}

// 다른 풀이
function solution(arr) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < characters.length; i++) {
    const char = characters.charAt(i);
    if (isAllHasChar(char, arr)) {
      result.push(char);
    }
  }

  return result;
}

function isAllHasChar(char, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(char) < 0) {
      return false;
    }
  }

  return true;
}

// find common num string
// 문자열 배열 arr가 있습니다.
// 이 문자열들의 공통된 문자를 오름차순으로 출력하는 함수, solution을 완성해주세요.
// 예를 들어, arr ['0326', '0508']가 있을 때,
// 공통된 문자는 ['0'] 입니다.
function solution(arr) {
  // 배열이 비어있거나 첫 번째 문자열이 비어있으면 빈 배열 반환
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }

  // 첫 번째 문자열을 기준으로 공통된 문자를 저장할 Set을 생성
  const commonNumString = new Set(arr[0]);

  // 나머지 문자열과 비교하여 공통된 문자를 구함
  for (let i = 1; i < arr.length; i++) {
    const currentNumString = new Set(arr[i]);
    // 현재 문자열의 문자 중 commonChars에 포함된 것만 남김
    commonNumString.forEach((char) => {
      if (!currentNumString.has(char)) {
        commonNumString.delete(char);
      }
    });

    // 만약 commonChars가 비어있다면 더 이상 공통된 문자가 없으므로 바로 반환
    if (commonNumString.size === 0) {
      return [];
    }
  }

  // Set을 배열로 변환하여 오름차순 정렬 후 반환
  return Array.from(commonNumString).sort();
}

// 다른 풀이
function solution(arr) {
  const numbers = "0123456789";
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const char = numbers.charAt(i);
    if (isAllHasChar(char, arr)) {
      result.push(char);
    }
  }

  return result;
}

function isAllHasChar(char, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(char) < 0) {
      return false;
    }
  }

  return true;
}

// FoodBj
// 문제
// 유명한 먹방 BJ `5명`이 짜장면을 제한 시간 내에 다 먹을 시에 짜장면 `무료` 혜택과 상금 `150만 원`을 받게 되는 중국집을 방문했습니다.
// 첫 번째 짜장면을 다 먹은 BJ는 다음 짜장면도 먹을 수 있고 혜택과 상금도 `동일하게 제공`됩니다.
// 짜장면 세 그릇을 먹은 1명의 BJ만이 우승을 거머쥐었습니다.
// 짜장면을 한 그릇도 먹지 못한 BJ는 없습니다.
// 참가자 5명을 `BJ` 배열에 담고 한 그릇씩 먹은 참가자들을 `one` 배열에, 두 그릇씩 먹은 참가자들을 `two` 배열에 담아
// 짜장면의 상금으로 지출된 금액과 우승자를 출력하는 함수, solution을 완성해주세요.

// 제한
// BJ들의 이름은 같을 수 없습니다.
// 참가한 BJ는 총 5명입니다.
// 준비된 짜장면은 최대 20그릇입니다.

function solution(bj, one, two) {
  const reward = 150;
  const prize = one.length * reward + two.length * (reward * 2) + reward * 3;
  const winner = bj.filter((eachBj) => ![...one, ...two].includes(eachBj));
  return `${prize}만원(${winner[0]})`;
}

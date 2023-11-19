// 문제 1
// 가장 많이 등장하는 수를 정수로 반환
let numberArr = [];
let count = {};
let maxKey;
let maxValue = -1;
function solution(s) {
  numberArr = s.split("").map(Number).sort();
  console.log(numberArr);
  numberArr.forEach(function (element) {
    count[element] = (count[element] || 0) + 1;
  });
  console.log(count);
  for (var key in count) {
    if (count.hasOwnProperty(key)) {
      if (count[key] > maxValue || (count[key] === maxValue && key < maxKey)) {
        maxKey = Number(key);
        maxValue = count[key];
      }
    }
  }
  return maxKey;
}

// 문제 2번
// 문자열 s는 이진수로 표현된 양의 정수
// 해당 정수에 대해 아래의 연산 수행
// 짝수인 경우 값을 2로 나눈다.
// 홀수인경우 1을 뺀다
// 연산의 결과가 0이 될때까지 위 동작을 반복해서 수행했을 떄, 수행된 연산의 홋수를 구하는 프로그램을 구현하시오
function solution(s) {
  let result = 0;
  let decimalNumber = parseInt(s, 2);
  while (decimalNumber > 0) {
    if (decimalNumber % 2 === 0) {
      decimalNumber = decimalNumber / 2;
    } else {
      decimalNumber = decimalNumber - 1;
    }
    result++;
  }
  return result;
}

// 문제 3
// 문자열 s는 하나의 단어이다.
// 단어를 거꾸로 뒤집어도 똑같은 것을 회문이라고 한다.
// 주어진 단어가 회문인 경우 1, 아닌 경우 0을 리턴하는 함수를 구현
function solution(s) {
  let result = 0;
  let reverse = s.split("").reverse().join("");
  if (s === reverse) {
    result = 1;
  } else {
    result = 0;
  }
  return result;
}

// 문제 04
// 문자열 s가 주어졌을 때 반복 없이 가장 긴 알파벳 길이를 구하는 함수 구현
// 예를 들어 문자열 s가 'abssccbsbsv'일 때, 반복 없이 가장 긴 알파벳 길이는 3이다.
function solution(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 0, ",");
      }
    }
  }

  let newArr = arr.join("").split(",");

  let longestSubArr = newArr[0];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > longestSubArr.length) {
      longestSubArr = newArr[i];
    }
  }

  return longestSubArr.length;
}

// 다른 풀이
function solution(s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    let currentChar = s[end];

    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= start
    ) {
      // 현재 문자가 이미 등장한 경우, 현재 부분 문자열의 시작 위치를 조정
      start = charIndexMap[currentChar] + 1;
    }

    // 현재 문자의 인덱스를 갱신
    charIndexMap[currentChar] = end;

    // 현재 부분 문자열의 길이 계산 및 최대 길이 업데이트
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// 문제 5
// 문자열 s가 주어진다.
// s가 pangram인지 판단하는 함수, solution을 완성하시오
// pangram이란 모든 알파벳이 사용된 문장을 말한다.
function solution(s) {
  var answer = true;
  let containsWord = 0;
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < alphabets.length; i++) {
    if (!s.includes(alphabets[i])) containsWord--;
  }
  if (containsWord < 0) {
    answer = false;
  } else {
    answer = true;
  }
  return answer;
}

// 다른 풀이
function isPangram(s) {
  // 알파벳을 저장할 Set 객체 생성
  let alphabetSet = new Set();

  // 문자열을 소문자로 변환하고 알파벳을 Set에 추가
  for (let char of s.toLowerCase()) {
    // 알파벳인 경우만 추가
    if (/[a-z]/.test(char)) {
      alphabetSet.add(char);
    }
  }

  // 알파벳의 개수와 영어 알파벳 개수(26)가 동일한지 확인
  return alphabetSet.size === 26;
}

// 예제 호출
let result = isPangram("The quick brown fox jumps over the lazy dog");
console.log(result); // 출력: true

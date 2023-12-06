// 회문문자열
// 문제
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// 입력
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// 핵심 아이디어
// toLowerCase() 메서드로 모두 소문자로 만들기
// for 문 사용하는 경우 - 대칭되는 인덱스의 요소들이 서로 같은지 검사
// split('') reverse() join() 메서드로 문자열 거꾸로만들기

// 풀이
function solution(s) {
  let answer = "";
  let lowerCaseString = s.toLowerCase();
  let reversedString = lowerCaseString.split("").reverse().join("");

  if (lowerCaseString === reversedString) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
}

let s = "gooG";
console.log(solution(s));

// for문 활용한 풀이
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let length = s.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (s[i] !== s[length - i - 1]) answer = "NO";
  }
  return answer;
}

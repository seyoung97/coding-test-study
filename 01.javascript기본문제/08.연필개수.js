// 연필 개수
// 문제
// 연필 1 다스는 12자루입니다.
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// 입력
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.

// 풀이
function solution(n) {
  let answer;
  answer = Math.floor(n / 12);
  if (n % 12 > 0) {
    answer += 1;
  }
  return answer;
}

console.log(solution(25));

// Math.ceil() 사용
// 소수점이 있으면 올림하는 함수
function solution(n) {
  let answer = Math.ceil(n / 12);
  return answer;
}

// Math.floor() 소수점 있으면 내림
// Math.ceil() 소수점 있으면 올림
// Math.round() 소수점 있으면 반올림
// Math.sqrt() 제곱근 구해줌

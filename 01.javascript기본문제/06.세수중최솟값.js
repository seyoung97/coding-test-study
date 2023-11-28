// 세 수 중 최솟값
// 문제
// 100이하의 자연수 A, B, C를 입력받아
// 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.
// (정렬을 사용하면 안됩니다)

// 입력
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.

// 풀이
function solution(a, b, c) {
  let answer = 0;
  if (a < b && a < c) {
    answer = a;
  } else if (b < a && b < c) {
    answer = b;
  } else if (c < a && c < b) {
    answer = c;
  }
  return answer;
}

// 다른 풀이
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

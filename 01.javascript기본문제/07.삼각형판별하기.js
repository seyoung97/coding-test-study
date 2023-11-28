// 삼각형 판별하기
// 문제
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 입력
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// 풀이
function solution(a, b, c) {
  let answer;
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);
  if (arr[0] + arr[1] < arr[2]) {
    answer = "NO";
  } else {
    answer = "YES";
  }
  return answer;
}

// sort없는 풀이
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = "NO";
  return answer;
}

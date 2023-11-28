// 최솟값 구하기
// 문제
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// 입력
// 첫 번째 줄에 가장 작은 값을 출력한다.

// 풀이
function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  // 최솟값을 큰 값으로 초기화하기
  // Number.MAX_SAFE_INTEGER 안정적인 가장 큰 정수를 부여

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];

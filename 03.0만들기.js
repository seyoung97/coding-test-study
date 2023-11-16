// 0 만들기
// 문제
// 1부터 N까지의 수를 오름차순으로 쓴 수열 1 2 3 ... N을 생각하자.
// 그리고 '+'나 '-', 또는 ' '(공백)을 숫자 사이에 삽입하자
// (+는 더하기, -는 빼기, 공백은 숫자를 이어 붙이는 것을 뜻한다).
// 이렇게 만든 수식의 값을 계산하고 그 결과가 0이 될 수 있는지를 살피자.
// N이 주어졌을 때 수식의 결과가 0이 되는 모든 수식을 찾는 프로그램을 작성하라.

// 입력
// 첫 번째 줄에 테스트 케이스의 개수가 주어진다(<10).
// 각 테스트 케이스엔 자연수 N이 주어진다(3 <= N <= 9).

// 문제 해결 아이디어
// 1부터 N까지의 수를 오름차순으로 쓴 수열[1,2,3,...N]이 있다고 해보자.
// 이때 각 수 사이에 사용할 수 있는 연산으로는 다음의 세 가지 연산이 있다.
// 더하기, 빼기, 숫자 이어 붙이기
// 결과적으로 N이 주어졌을 때, 수식의 결과가 0이되는 모든 수식을 찾아야 한다.
// 테스트 케이스 및 자연수 N의 최댓값은 9이다.
// 3개의 연산 중에서 연속적으로 N번 선택하는 중복 순열 문제로 이해할 수 있다.
// +만 연속적으로 선택 가능
// 따라서 가능한 전체 경우의 수는 3의8제곱이다. (연산이 최대 8번 들어갈 수 있음)

function dfs(result, depth) {
  if (depth == n - 1) {
    // 현재 순열 처리(중복 순열)
    let str = ""; // 현재 수식 문자열
    for (let i = 0; i < n - 1; i++) {
      str += arr[i] + result[i];
    }
    str += arr[n - 1] + "";
    current = eval(str.split(" ").join("")); // 공백을 제거한 뒤에 수식 계산
    if (current == 0) console.log(str); // 수식의 결과가 0이 되는 경우 출력
    return;
  }
  for (let x of [" ", "+", "-"]) {
    // 더하기, 뺴기, 혹은 이어붙이기
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
  // 각 테스트 케이스 처리
  n = Number(input[tc]); // 자연수 입력받기
  arr = [];
  for (leti = 1; i <= n; i++) arr.push(i);
  dfs([], 0);
  console.log();
}

// A->B
// 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음 두가지 이다.
// 2를 곱한다.
// 1을 수의 가장 오른쪽에 추가한다.
// A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

// 입력
// 첫째줄에 A,B가 주어진다.

// 문제해결 아이디어
// B에서 A로 이동한다고 반대로 생각해보자
// 현재의 B값이 정해져있을 때, 취할 수 있는 행동은 항상 정해져있다.
// 1) 값이 2로 나누어 떨어지는 경우 -> 2로 나누는 연산만 사용 가능하다.
// 2) 그렇지 않고, 일의 자릿수가 1인경우 -> 10으로 나누는 연산만 사용 가능하다.
// 3) 위 경우가 모두 해당되지 않는 경우 더이상 이동이 불가능하므로 종료한다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let result = 1;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }
  if (b % 2 === 0) b = parseInt(b / 2);
  if (b % 10 === 0) b = parseInt(b / 10);
  else break;
  result++;
}
if (flag) console.log(result);
if (!flag) console.log(-1);

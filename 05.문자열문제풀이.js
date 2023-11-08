// 숫자의 합
// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numbers = input[1].split("").map(Number);

let total = numbers.reduce((a, b) => a + b);
console.log(total);

// 다른 풀이
let n = Number(input[0]);
let string = input[1];

let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며
for (let x of string) {
  // 모든 숫자를 더하기
  answer += Number(x);
}

console.log(answer);

// 문자열 반복
// 문제
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
// 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다.
// S에는 QR Code "alphanumeric" 문자만 들어있다.
// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다.
// 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다.
// S의 길이는 적어도 1이며, 20글자를 넘지 않는다.

// 풀이
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input2[0]);

// 한 줄 (line)씩 입력 받기
for (let i = 1; i <= testCase; i++) {
  let [r, s] = input2[i].split(" ");
  let result = "";
  // 현재 문자열의 각 문자를 하나씩 확인하며
  for (let j = 0; j <= s.length; j++) {
    //r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}

// 상수
// 문제
// 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다.
// 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다.
// 상근이는 세 자리 수 두 개를 칠판에 써주었다.그 다음에 크기가 큰 수를 말해보라고 했다.
// 상수는 수를 다른 사람과 다르게 거꾸로 읽는다.
// 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다.
// 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.
let fs = require("fs");
let input3 = fs.readFileSync("/dev/stdin").toString().split("\n");

let s1 = input3[0].split(" ")[0];
let s2 = input3[0].split(" ")[1];

let n1 = Number(s1.split("").reverse().join(""));
let n2 = Number(s2.split("").reverse().join(""));

if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}

// 다른 풀이
let newS1 = s1[2] + s1[1] + s1[0];
let newS2 = s2[2] + s2[1] + s2[0];

console.log(Math.max(Number(newS1), Number(newS2)));

// A+B
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

//풀이
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// ["1", "2"]
let line = input[0].split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);
console.log(a + b);

// A*B
// 문제
// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A×B를 출력한다.

// 풀이
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");

let line2 = input2[0].split(" ");
let c = parseInt(line2[0]);
let d = parseInt(line2[1]);

console.log(c * d);

// 사칙연산
// 문제
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

// 입력
// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

// 출력
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

//풀이
let fs = require("fs");
let input3 = fs.readFileSync("/dev/stdin").toString().split("\n");

let line3 = input3[0].split(" ");
let e = Number(line3[0]);
let f = Number(line3[1]);

console.log(e + f);
console.log(e - f);
console.log(e * f);
console.log(parseInt(e / f));
// JavaScript에서 나누기 연산(/)을 수행하면 실수 데이터가 반환될 수 있다. 4/8=0.5
// 따라서 몫만 취하기 위해서는 parseInt() 함수를 사용해야함
// 실수를 정수로 바꾸어 주면 소수점 아래는 버려지는 것 = 몫만 취하는 것
console.log(e % f);

// 곱셈
// 문제
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

// 출력
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

//풀이
// 핵심 아이디어
// 세 자리 수 두 개가 주어진다.
// 문자열로 처리하면, 각 자릿수를 쉽게 얻을 수 있다.
let fs = require("fs");
let input4 = fs.readFileSync("/dev/stdin").toString().split("\n");

let g = input4[0];
let h = input4[1];

X_1 = h[2]; // 일의 자리
X_2 = h[1]; // 십의 자리
X_3 = h[0]; // 백의 자리

console.log(Number(g) * Number(X_1));
console.log(Number(g) * Number(X_2));
console.log(Number(g) * Number(X_3));
console.log(Number(g) * Number(h));

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

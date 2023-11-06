// 시험성적
// 문제
// 시험 점수를 입력받아 90 ~100점은 A, 80 ~89점은 B, 70 ~79점은 C, 60 ~69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = Number(input[0]);

function check(a) {
  if (90 <= a && a <= 100) {
    console.log("A");
  } else if (80 <= a && a <= 89) {
    console.log("B");
  } else if (70 <= a && a <= 79) {
    console.log("C");
  } else if (60 <= a && a <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}

check(data);

// 알람시계
// 문제
// 상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
// 상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
// 이런 상근이를 불쌍하게 보던 창영이는 자신이 사용하는 방법을 추천해 주었다.
// 바로 "45분 일찍 알람 설정하기"이다.
// 이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면,
//알람을 끄고 조금 더 잘 것이기 때문이다.이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.
// 현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 알람 시간 H시 M분을 의미한다.
// 입력 시간은 24시간 표현을 사용한다. 24시간 표현에서
//하루의 시작은 0: 0(자정)이고, 끝은 23: 59(다음날 자정 1분 전)이다.시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

// 풀이
let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");
let H = Number(input2[0].split(" ")[0]);
let M = Number(input2[0].split(" ")[1]);

function Alarm(h, m) {
  if (45 <= m && m <= 60) {
    console.log(h, m - 45);
  } else if (0 <= m && m < 45 && h === 0) {
    console.log(23, 60 + (m - 45));
  } else if (0 <= m && m < 45 && h != 0) {
    console.log(h - 1, 60 + (m - 45));
  }
}

Alarm(H, M);

// 다른 풀이
if (M < 45) {
  hour -= 1;
  minute += 15; // 전체 분은 60분이기 떄문에
  if (H < 0) H = 23;
} else {
  minute -= 45;
}

console.log(H + " " + M);

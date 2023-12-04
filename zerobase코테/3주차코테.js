// 문제 01
// n개의 문자를 보여주는 크기가 n인 전광판이 있습니다.
// 전광판의 문자는 오른쪽에서 왼쪽으로 반복해서 흘러가며,
// 1초에 한 글자씩 흘러갑니다.
// 전광판은 처음에는 . 으로 가득 차 있으며, 문자열이 흐르다가 완전히 사라지고 나면
// 다시 문자열이 반복해서 흘러간다.
// 예를 들어, 크기가 5인 전광판에 "Snowball"을 노출한다고 가정할 때,
// 시간 t의 변화에 따른 노출 예시는 다음과 같다
// t: 0초
// 전광판: .....
// t: 1초
// 전광판: ....S
// t: 5초
// 전광판: Snowb
// t: 10초
// 전광판: all..
// t: 15초
// 전광판: ...Sn
// 전광판의 크기 n과 전광판에 노출할 문자 s그리고 시간 t가 주어질 때,
// t초 후에 전광판에 표시될 문구를 보여주는 프로그램을 구현하세요.

// 핵심 아이디어
// substring() 메서드를 사용
// string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환

// [., ., ., ., ., S, n, o, w, b, a, l, l]
// 풀이
function solution(n, s, t) {
  // 반복 주기
  const repeatDuration = n + s.length;

  // 반복되는 주기를 제외하고 남은 시간 계산
  const optimizeTime = t % repeatDuration;

  // 남은 시간이 흐른 후의 전광판 출력
  const text = ".".repeat(n) + s + ".".repeat(n - 1);
  return text.substring(optimizeTime, n);
}

// 문제 02
// 알파벳 대/소문자와 숫자 그리고
// 구분자인 마침표(.), 쉽표(,), 느낌표(!), 물음표(?), 스페이스()로 이루어진 문장이 있다.
// 문장 내에는 구분자를 기준으로 단어를 구분한다.
// 문장 s가 주어질 때, 각 단어를 거꾸로 뒤집어 모은 문자열 배열을 출력하는 프로그램을 구현하세요.
// 단, 구분자가 연속으로 나타난 경우에는 그 안에 단어가 없다고 가정하세요.
// (즉, 빈 단어는 없다고 가정하세요)

// 핵심 아이디어
// 정규식으로 구분자 처리
// split, reverse, join 메서드로 단어 거꾸로 뒤집기

function solution(s) {
  let result = [];
  let reversed = "";
  const sentenceWithoutPunctuation = s.replace(/[.,!?]/g, "");
  let arr = sentenceWithoutPunctuation.split(" ");
  for (let i = 0; i < arr.length; i++) {
    reversed = arr[i].split("").reverse().join("");
    result.push(reversed);
  }
  return result;
}

// 다른 풀이
function solution(s) {
  return s
    .split(/[.,!? ]/) // 구분자 기준으로 split
    .filter((word) => word !== "") // 공백 제거
    .map((word) => word.split("").reverse().join("")); // 단어 뒤집기
}

// 문제 03
// 정수 배열 A에는 0보다 큰 숫자가 N개 들어가있다.
// N개의 모든 숫자를 아우르는 최대 공약수를 구하는 프로그램을 구현하세요.

// 핵심 아이디어
// 유클리드 호제법(Euclidean Algorithm)을 사용해 최대 공약수 구하기
// 두 수 a와 b에 대해, b가 0이 될 때까지 a를 b로 나누고 나머지를 취하는 과정을 반복
// 최종적으로 b가 0이 되면 그 때의 a가 최대 공약수가 된다.

function findGCDOfArray(arr) {
  // 두 수의 최대공약수를 계산하는 함수
  function findGCD(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 배열의 첫 번째 요소를 초기값으로 설정
  var resultGCD = arr[0];

  // 배열의 모든 요소에 대해 최대공약수 계산
  for (var i = 1; i < arr.length; i++) {
    resultGCD = findGCD(resultGCD, arr[i]);

    // 최대공약수가 1이면 더 이상 계산할 필요가 없음
    if (resultGCD === 1) {
      break;
    }
  }

  return resultGCD;
}

// 예제 사용
var numbers = [12, 18, 24];
var result = findGCDOfArray(numbers);
console.log("최대공약수:", result);

// 문제 04
// 제로베이스 멤버들은 모두 모여서 마피아게임을 하기로 했습니다.
// 마피아게임의 규칙은 다음과 같습니다.
// N명의 멤버들은 같은 숫자의 카드를 받고, 단 2명만 다른 숫자의 카드를 받습니다.
// 멤버들은 최소 5명이 있으며, 매 게임마다 무조건 2명의 마피아가 존재합니다.
// 이때 마피아인 멤버의 인덱스를 찾아서 오름차순으로 출력해주세요.
// 예를 들면 주어진 배열 members가 [4, 4, 10, 4, 10]이라고 할 때,
// 5명의 멤버들 가운데 10의 카드를 가진 멤버가 마피아이고
// 저희가 출력해야할 결과는[2, 4]입니다.

//핵심 아이디어
// new Set을 사용하여 카드의 종류를 파악하기

function solution(members) {
  var answer = [];
  let membersSet = new Set(members);
  let card = Array.from(membersSet);
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < members.length; i++) {
    if (members[i] === card[0]) {
      count1++;
    } else if (members[i] === card[1]) {
      count2++;
    }
  }
  if (count1 > count2) {
    answer.push(members.indexOf(card[1]));
    answer.push(members.indexOf(card[1], 2));
  } else if (coutn1 < count2) {
    answer.push(members.indexOf(card[0]));
    answer.push(members.indexOf(card[0], 2));
  }
  return answer.sort((a, b) => a - b);
}

// 문제 05
// 주어진 두 개의 수를 소인수 분해 했을 때
// 공통된 소수의 집합을 가지고 있는지 판단하는 함수르 작성하시오
// 예를 들어 12, 6은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있다.
// 9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에
// 공통 소수 집합이 아니다.
function GCD(a, b) {
  if (b == 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
}

function solution(A, B) {
  var gcd = GCD(A, B);
  var gcdA = 0;
  var gcdB = 0;

  while (gcdA != 1) {
    gcdA = GCD(A, gcd);
    A = A / gcdA;
  }

  while (gcdB != 1) {
    gcdB = GCD(B, gcd);
    B = B / gcdB;
  }

  if (A == 1 && B == 1) {
    return 1;
  } else {
    return 0;
  }
}

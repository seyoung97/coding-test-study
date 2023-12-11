// 뒤집은 소수
// 문제
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후
// 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다.그러면 23을 출 력한다.
// 단 910를 뒤집으면 19로 숫자화 해야 한다.첫 자리부터의 연속된 0은 무시한다.

// 풀이
function isPrime(num) {
  // 소수인지 확인
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

// 라이브러리 사용
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

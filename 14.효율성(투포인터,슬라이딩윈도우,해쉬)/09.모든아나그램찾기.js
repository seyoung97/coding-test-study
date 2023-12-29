// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// 문제
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

// 입력예제 1
// bacaAacba
// abc

// 출력예제 1
// 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.

// 풀이
function compares(map1, map2) {
  for ([key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    } else {
      return true;
    }
  }
}

function solution(s1, s2) {
  let answer = 0;
  let arr = s1.split("");
  let tH = new Map();
  let sH = new Map();
  let lt = 0;
  let rt = s2.length - 1;
  for (x of s2) {
    if (tH.has(x)) {
      tH.set(x, tH.get(x) + 1);
    } else {
      tH.set(x, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < rt) {
      if (sH.has(arr[i])) sH.set(arr[i], sH.get(arr[i]) + 1);
      else sH.set(arr[i], 1);
    }
    if (sH.has(arr[rt])) {
      sH.set(arr[rt], sH.get(arr[rt]) + 1);
      if (compares(sH, tH)) answer++;
      rt++;
    } else {
      sH.set(arr[rt], 1);
      if (compares(sH, tH)) answer++;
      rt++;
    }
  }
  return answer;
}

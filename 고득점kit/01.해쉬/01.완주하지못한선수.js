// 완주하지 못한 선수
// 문제
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 입력 예시 1
// ["marina", "josipa", "nikola", "vinko", "filipa"]
// ["josipa", "filipa", "marina", "nikola"]

// 출력 예시 1
// "vinko"

// 입력 예시 2
// ["mislav", "stanko", "mislav", "ana"]
// ["stanko", "ana", "mislav"]

// 출력 예시 2
// "mislav"

// 풀이
function solution(participant, completion) {
  let answer = "";
  let participantMap = new Map();
  let completionMap = new Map();
  for (x of participant) {
    if (participantMap.has(x)) {
      participantMap.set(x, participantMap.get(x) + 1);
    } else {
      participantMap.set(x, 1);
    }
  }
  for (x of completion) {
    if (completionMap.has(x)) {
      completionMap.set(x, completionMap.get(x) + 1);
    } else {
      completionMap.set(x, 1);
    }
  }
  for (const [key, value] of participantMap) {
    if (!completionMap.has(key) || completionMap.get(key) != value) {
      answer = key;
      break;
    }
  }
  return answer;
}

// 다른 풀이
function solution(participant, completion) {
  const participantHash = {};

  // 참가자 배열의 이름을 해시에 등록하고 출현 횟수를 기록합니다.
  for (const name of participant) {
    participantHash[name] = (participantHash[name] || 0) + 1;
  }

  // 완주자 배열의 이름을 해시에서 빼면서 출현 횟수를 감소시킵니다.
  for (const name of completion) {
    participantHash[name] -= 1;
  }

  // 출현 횟수가 0이 아닌 참가자가 완주하지 못한 선수입니다.
  for (const name in participantHash) {
    if (participantHash[name] !== 0) {
      return name;
    }
  }
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));

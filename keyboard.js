function applyTransforms(keyboard, transforms) {
  for (const transform of transforms) {
    if (transform === "H") {
      keyboard = horizontalFlip(keyboard);
    } else if (transform === "V") {
      keyboard = verticalFlip(keyboard);
    } else if (Number(transform)) {
      const shiftAmount = Number(transform);
      keyboard = shiftColumns(keyboard, shiftAmount);
    }
  }
  return keyboard;
}

function horizontalFlip(keyboard) {
  const rows = keyboard.split(" ");
  const flippedRows = rows.map((row) => row.split("").reverse().join(""));
  return flippedRows.join(" ");
}

function verticalFlip(keyboard) {
  const rows = keyboard.split(" ");
  const flippedRows = rows.reverse();
  return flippedRows.join(" ");
}

function shiftColumns(keyboard, shiftAmount) {
  const rows = keyboard.split(" ");
  const shiftedRows = rows.map((row) => {
    const chars = row.split("");
    const shiftedChars = chars.map((char) =>
      shiftChar(keyboard, char, shiftAmount)
    );
    return shiftedChars.join("");
  });
  return shiftedRows.join(" ");
}

function shiftChar(keyboard, char, shiftAmount) {
  // const allChars = "1234567890qwertyuiopasdfghjkl;zxcvbnm,./";
  const allChars = keyboard.split(" ").join("");
  const index = allChars.indexOf(char);
  const newIndex = (index - shiftAmount + allChars.length) % allChars.length;
  return allChars[newIndex];
}

function transformText(transforms, text) {
  const keyboardLayout = "1234567890 qwertyuiop asdfghjkl; zxcvbnm,./";
  const transformedKeyboard = applyTransforms(keyboardLayout, transforms);
  const transformedText = text
    .split("")
    .map((char) => {
      const index = keyboardLayout.indexOf(char);
      return index !== -1 ? transformedKeyboard[index] : char;
    })
    .join("");
  return transformedText;
}

// Example Usage
const transforms = "H,V,H,5,V,-12".split(",");
const textToTransform =
  "all human beings are born free and equal in dignity and rights. they are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.";

console.log(transformText(transforms, textToTransform));

// 8yy cf483 2/g3x9 8a/ 26a3 za// 830 /,f8y g3 0gx3gsd 830 agxcs9h sc/d 8a/ /306./0 .gsc a/8963 830 p639pg/3p/ 830 9c6fy0 8ps s6.8a09 63/ 836sc/a g3 8 97gags 6z 2a6sc/ac660h
// rss o0;rl k6qlit r76 kw7l u766 rly 640rs ql yqilq89 rly 7qio8tx 8o69 r76 6lyw56y 5q8o 76rtwl rly hwlthq6lh6 rly tow0sy rh8 8w5r7yt wl6 rlw8o67 ql r teq7q8 wu k7w8o67owwyx

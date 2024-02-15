function romanToInt(s: string): number {
  let numbers = 0;
  if (s.length < 1) return 0;

  let chars = ["I", "V", "X", "L", "C", "D", "M"];

  for (let i = 0; i < s.length; i++) {
    let next_char = i < s.length - 1 ? s[i + 1] : "";

    if (chars.includes(s[i])) {
      if (s[i] === "I") {
        numbers += next_char === "V" || next_char === "X" ? -1 : +1;
      } else if (s[i] === "X") {
        numbers += next_char === "L" || next_char === "C" ? -10 : +10;
      } else if (s[i] === "C") {
        numbers += next_char === "D" || next_char === "M" ? -100 : +100;
      } else if (s[i] === "V") {
        numbers += 5;
      } else if (s[i] === "L") {
        numbers += 50;
      } else if (s[i] === "D") {
        numbers += 500;
      } else if (s[i] === "M") {
        numbers += 1000;
      }
    }
  }
  return numbers;
}

romanToInt("IVV");

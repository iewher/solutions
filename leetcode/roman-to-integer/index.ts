function romanToInt(s: string): number {
  const split = s.split("");
  const array = [];
  let numbers: number = 0;

  const numerals = [
    { symbol: "I", value: 1 },
    { symbol: "V", value: 5 },
    { symbol: "X", value: 10 },
    { symbol: "L", value: 50 },
    { symbol: "C", value: 100 },
    { symbol: "D", value: 500 },
    { symbol: "M", value: 1000 },
  ];

  for (let i = 0; i < s.length; i++) {
    if (split[i] === numerals[i].symbol) {
      array.push(numerals[i].value);
      numbers += array[i];
      continue;
    }
  }

  return numbers;
}

romanToInt("IVX");

function isPalindrome(x: number): boolean {
  let arr = x.toString().split("");
  let reverse_arr = x.toString().split("").reverse();

  let result = [];

  if (arr === null) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reverse_arr[i]) {
      result.push("false");
    }

    result.push("true");
  }

  if (result.includes("false")) {
    return false;
  } else {
    return true;
  }
}

isPalindrome(10);

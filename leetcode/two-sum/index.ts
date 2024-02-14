let twoSum = function (nums: Array<number>, target: number) {
  let result: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        console.log(result);
        return result;
      } else {
        j + 1;
        continue;
      }
    }
  }
};

/**
Input: twoSum([2, 7, 11, 15], 17);
Output: [0,3]
*/

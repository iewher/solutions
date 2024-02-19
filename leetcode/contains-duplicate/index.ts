function containsDuplicate(nums: number[]): boolean {
  let numset = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numset.has(nums[i])) return true;
    numset.add(nums[i]);
  }
  return false;
}

containsDuplicate([1, 2, 3, 4, 5, 1]);

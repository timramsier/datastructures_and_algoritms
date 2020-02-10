function getArrayHasSumOf(nums: number[], sum: number): boolean {
  const history = new Set();
  for (const num of nums) {
    const needed = sum - num;
    if (history.has(needed)) return true;
    history.add(num);
  }
  return false;
}

export default getArrayHasSumOf;

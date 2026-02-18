function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numDict = {};
  let longestStack = 0;

  for (let i = 0; i < nums.length; i++) {
    numDict[nums[i]] = true;
  }

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    if (!numDict[currentNum - 1]) {
      let currentStack = 1;

      while (numDict[currentNum + 1]) {
        currentNum++;
        currentStack++;
      }

      if (currentStack > longestStack) {
        longestStack = currentStack;
      }
    }
  }

  console.log(longestStack);
  
}
longestConsecutive([100, 4, 200, 1, 3, 2])   // 4  (1,2,3,4)
//longestConsecutive([0, -1, 1, 2])           // 3  (-1,0,1) или (0,1,2)
//longestConsecutive([10, 5, 12, 3, 55, 11, 4]) // 4 (3,4,5)
//longestConsecutive([])                      // 0

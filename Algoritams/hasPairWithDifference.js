function hasPairWithDifference(nums,k){
   const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    if (seen[x + k] || seen[x - k]) {
      return true;
    }

    seen[x] = true;
  }

  return false;
    
}
hasPairWithDifference([5, 10, 3, 2, 50, 80], 78)  // true  (80 - 2)
hasPairWithDifference([1, 2, 3, 4], 5)           // false
hasPairWithDifference([1, 5, 3, 4, 2], 3)        // true (4 - 1, 5 - 2)
hasPairWithDifference([], 1)                    // false

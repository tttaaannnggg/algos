const twoSum = function(nums, target) {
    const possibleDiffs = {};
    const result = [];
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        const correspondingIndex = possibleDiffs[diff];
      console.log(i);
      console.log({diff, correspondingIndex});
          console.log(possibleDiffs);
        if(typeof correspondingIndex === 'number'){
            return [correspondingIndex, i]
        }
        possibleDiffs[diff] = i;
    }
    return [null, null];
};

console.log(twoSum([2,7,11,15],
9))

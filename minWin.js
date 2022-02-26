var minWindow = function(s, t) {
    const targetChars = t.split("");
    const remainingTargets = new Set(targetChars);
    const TARGET_COUNTS = targetChars.reduce((acc, val) => {
        acc[val] = acc[val]? (acc[val] + 1) : 1
        return acc;
    }, {})
    const currentCounts = {};
    let left = 0;
    let right = 0;
    const substring = [left, right];
    while(right <= s.length && (left <= right)){
      console.log({right, left});
        //if there are any unresolved characters, inch right
        if(remainingTargets.size){
            const rightChar = s[right];
            if(TARGET_COUNTS.hasOwnProperty(rightChar)){
                //check if our current count of this char is at least equal to the target;
                currentCounts[rightChar] = currentCounts[rightChar] ? currentCounts[rightChar] + 1 : 1;
                if(currentCounts[rightChar] >= TARGET_COUNTS[rightChar]){
                    //if it is, we don't need to think about that char any more
                    remainingTargets.delete(rightChar);
                }
            }
            right += 1;
        }else{
            // if there aren't any unresolved characters
            // check if current substring is shorter than shortest
            if(!substring[1] || (right - left < substring[1] - substring[0])){
              console.log('here', left, right);
                substring[0] = left;
                substring[1] = right;
            }
            //advance left until we're missing something
            const leftChar = s[left];
            if(currentCounts.hasOwnProperty(s[left])){
                currentCounts[leftChar] -= 1;
                if(currentCounts[leftChar] < 1){
                    remainingTargets.add(leftChar);
                }
            }
            left += 1
        }
    }
    return s.slice(substring[0], substring[1])
};

console.log(minWindow('aa','aa'));

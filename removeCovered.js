// https://leetcode.com/problems/remove-covered-intervals/
const isCovering = (a,b) => (a[0] <= b[0]) && (a[1] >= b[1]);

var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0] || b[1]-a[1]);
    const outputIntervals = [intervals[0]];
          console.log(intervals);
    for(let i = 1 ; i < intervals.length; i++){
        const interval = intervals[i];
        const lastUncoveredInterval = outputIntervals[outputIntervals.length-1];
        if(!isCovering(lastUncoveredInterval, interval)){
            outputIntervals.push(intervals[i])
        }
    }
    return outputIntervals.length;
};

const testCase = [[1,2],[1,4],[3,4]];
const expected = 1;

console.log(removeCoveredIntervals(testCase))

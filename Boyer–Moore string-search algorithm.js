const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 
    32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23];

var MajorityElement = function (nums) {
    let count = 0;
    let nonRepeated = null;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            nonRepeated = nums[i];
            count++;
        }
        else if (nonRepeated == nums[i]) {
            count++;
        } else { 
            count--;
        }
    }

    return nonRepeated;
}

console.log(MajorityElement(arr));
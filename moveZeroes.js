const moveZeroes = nums => {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0
    }
    console.log(nums);
}
const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
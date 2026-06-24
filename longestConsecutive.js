const longestConsecutive = nums => {
    const set = new Set(nums)
    let maxLen = 0
    for (let num of set) {
        if (!set.has(num - 1)) {
            let cur = num
            let len = 1
            while (set.has(cur + 1)) {
                cur++
                len++
            }
            maxLen = Math.max(len, maxLen)
        }
    }
    return maxLen
}
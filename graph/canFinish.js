/*
 * :file description: LeetCode 207 - 课程表
 * :leetcode: https://leetcode.cn/problems/course-schedule/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * 本学期要修 numCourses 门课，编号 0 到 numCourses - 1。
 * prerequisites[i] = [a, b] 表示修 a 之前必须先修 b。
 * 判断能否修完所有课程。有环则不能。
 *
 * 示例 1：
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：先修 0，再修 1
 *
 * 示例 2：
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：0 和 1 互相依赖，形成环
 *
 * 约束：
 * 1 <= numCourses <= 2000，先修关系条数 <= 5000，每对关系互不相同。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // TODO: 拓扑排序 / DFS 判环
}

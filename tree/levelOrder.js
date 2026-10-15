/*
 * :file description: LeetCode 102 - 二叉树的层序遍历
 * :leetcode: https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * 返回二叉树的层序遍历：从上到下、每层从左到右。
 * 输入用层序数组表示，null 表示空孩子。
 *
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 *
 * 示例 2：
 * 输入：root = [1]
 * 输出：[[1]]
 *
 * 示例 3：
 * 输入：root = []
 * 输出：[]
 *
 * 约束：
 * 节点数 [0, 2000]，节点值 [-1000, 1000]。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  // TODO: BFS 队列
}

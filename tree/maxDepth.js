/*
 * :file description: LeetCode 104 - 二叉树的最大深度
 * :leetcode: https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * :status: todo
 *
 * 难度：简单
 *
 * 描述：
 * 返回二叉树的最大深度，即根节点到最远叶子的最长路径上的节点数。
 * 输入用层序数组表示，null 表示空孩子。
 *
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：3
 *
 * 示例 2：
 * 输入：root = [1,null,2]
 * 输出：2
 *
 * 约束：
 * 节点数 [0, 10^4]，节点值 [-100, 100]。
 */

function maxDepth(root) {
  if (!root) return 0;

  let depth = 0;
  const stack = [[root, 1]];

  while (stack.length) {
    const [node, currentDepth] = stack.pop();
    if (currentDepth > depth) depth = currentDepth;
    if (node.left) stack.push([node.left, currentDepth + 1]);
    if (node.right) stack.push([node.right, currentDepth + 1]);
  }

  return depth;
}

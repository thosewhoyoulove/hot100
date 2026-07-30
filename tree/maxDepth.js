/*
 * :file description: LeetCode 104 - 二叉树的最大深度
 * :leetcode: https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * :status: todo
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

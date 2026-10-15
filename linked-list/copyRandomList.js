/*
 * :file description: LeetCode 138 - 随机链表的复制
 * :leetcode: https://leetcode.cn/problems/copy-list-with-random-pointer/
 * :status: todo
 *
 * 难度：中等
 *
 * 描述：
 * 链表每个节点除 next 外还有 random，可指向链表中任意节点或 null。
 * 返回这条链表的深拷贝：n 个新节点，val、next、random 的连接关系与原链表一致，且不指向原节点。
 * 输入输出用 [val, randomIndex] 表示，randomIndex 为 null 表示不指向任何节点。
 *
 * 示例 1：
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * 示例 2：
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 *
 * 示例 3：
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 *
 * 约束：
 * 0 <= n <= 1000，-10^4 <= Node.val <= 10^4。
 */

/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *     this.val = val
 *     this.next = next
 *     this.random = random
 * }
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  // TODO: 哈希表映射旧节点 → 新节点，或原地插拷贝节点
}

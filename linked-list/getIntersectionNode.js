/*
 * :file description: LeetCode 160 - 相交链表
 * :leetcode: https://leetcode.cn/problems/intersection-of-two-linked-lists/
 * :status: todo
 *
 * 难度：简单
 *
 * 描述：
 * 给定两条单链表的头节点 headA、headB，返回它们相交的起始节点；不相交则返回 null。
 * 链表无环。函数返回后，原链表结构必须保持不变。
 * intersectVal、skipA、skipB 只用于构造测试数据，函数只接收两个头节点。
 *
 * 示例 1：
 * 输入：listA = [4,1,8,4,5], listB = [5,0,1,8,4,5]
 * 输出：相交节点值为 8（两条链表从 8 开始共用后半段）
 *
 * 示例 2：
 * 输入：listA = [0,9,1,2,4], listB = [3,2,4]
 * 输出：相交节点值为 2
 *
 * 示例 3：
 * 输入：listA = [2,6,4], listB = [1,5]
 * 输出：null
 *
 * 约束：
 * 两条链表长度均不超过 3 * 10^4。要求 O(m + n) 时间、O(1) 额外空间。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  // TODO: 双指针走两遍，路程对齐后相遇即为交点
}

/*
 * :file description: LeetCode 21 - 合并两个有序链表
 * :leetcode: https://leetcode.cn/problems/merge-two-sorted-lists/
 * :status: todo
 *
 * 难度：简单
 *
 * 描述：
 * 把两个升序链表合并成一个新的升序链表。新链表由原节点拼接而成。
 *
 * 示例 1：
 * 输入：list1 = [1,2,4], list2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 *
 * 示例 2：
 * 输入：list1 = [], list2 = []
 * 输出：[]
 *
 * 示例 3：
 * 输入：list1 = [], list2 = [0]
 * 输出：[0]
 *
 * 约束：
 * 每个链表节点数 [0, 50]，节点值 [-100, 100]，两条链表都已非递减。
 */

function mergeTwoLists(list1, list2) {
  // TODO: 虚拟头节点
  const dummy = new ListNode(0)
  let cur = dummy
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }
  cur.next = list1 || list2
  return dummy.next
}

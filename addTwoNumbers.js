const addTwoNumbers = (l1, l2) => {
    let dummy = new ListNode(0)
    let cur = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        //所有情况（包括进位、剩余节点）都已经在循环里处理完了
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        const sum = x + y + carry
        carry = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummy.next
}

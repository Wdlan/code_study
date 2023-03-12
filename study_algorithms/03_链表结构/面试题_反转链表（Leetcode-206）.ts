class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null ) return head
  let newNode: ListNode | null = null
    while(head){
        const current: ListNode | null = head.next
        head.next = newNode
        newNode = head
        head = current
    }
  return newNode
};
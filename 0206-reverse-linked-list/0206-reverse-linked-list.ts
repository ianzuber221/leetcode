/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
        let previousNode = null
    const recurse = (node: ListNode): ListNode=> {
    if(!node)return previousNode
    let nextNode:ListNode = node?.next;
    node.next = previousNode;
    previousNode = node
    return recurse(nextNode)
    }
    return recurse(head)
};
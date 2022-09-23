/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // const cache = {};
    // while(head) {
    //   if(cache[head] !== undefined) return true;
    //     cache[head] = true;
    //     head = head.next;
    // }
    // return false
    
    let fast= head, slow = head;
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast) return true;
    }
    return false;
};
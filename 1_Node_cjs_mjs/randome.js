class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Representa 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Representa 465

const iter = (n1, n2, rest = 0) => {
    
    if (!n1 && !n2 && !rest) return null;


    const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
    console.log("look", newVal);

    const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
    // recursividad

    return new ListNode(newVal % 10, nextNode);
}

console.log(iter(l1, l2));
// return iter(l1, l2);
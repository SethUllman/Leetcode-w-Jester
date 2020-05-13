// You are given two non - empty linked lists representing two non - negative 
// integers.The digits are stored in reverse order and each of their nodes 
// contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the 
// number 0 itself.

//  Definition for singly - linked list.
//  function ListNode(val, next) {
//    this.val = (val === undefined ? 0 : val)
//    this.next = (next === undefined ? null : next)
//  }

var addTwoNumbers = function(l1, l2) { //l1 = [2,4,3], l2 = [5,6,4] | l1 = [4,3], l2 = [6,4], carry = false | l1 = [3], l2 = [4], carry = true
  let node = null;
  const carry = arguments[2]; //undefined | false | true
  if (l1 || l2) { //true | true | true
    const val1 = l1 ? l1.val : 0; // 2 | 4 | 3
    const val2 = l2 ? l2.val : 0; // 5 | 6 | 4
    const next1 = l1 ? l1.next : null; // [4,3] | [3] | undefined
    const next2 = l2 ? l2.next : null; // [6,4] | [4] | undefined
    const val = carry ? val1 + val2 + 1 : val1 + val2; // 7 | 10 | 8
    node = new ListNode(val % 10); // [7] | [0] | [8]
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};


module.exports = addTwoNumbers;
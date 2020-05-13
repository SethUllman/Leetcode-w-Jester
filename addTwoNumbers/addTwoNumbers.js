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

const ListNode = (val, next) => {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}


var addTwoNumbers = function (l1, l2) {

};

const BFS = (root) => {
  let queue = [root];
  let values = [];

  while (queue.length){
    let next = queue.shift();
    queue.push(next.next);
    values.push(next.val);
  }

  return values;
}

const createList = (l1, l2) => {
  let root = new ListNode(l1.val + l2.val);
  let newNode = root;
  let next1 = l1;
  let next2 = l2;
  while(next1.next && next2.next){
    next1 = next1.next;
    next2 = next2.next;
    newNode.next = new ListNode(next1.val + next2.val);
    newNode = newNode.next
  }

  return root;
}

module.exports = addTwoNumbers;
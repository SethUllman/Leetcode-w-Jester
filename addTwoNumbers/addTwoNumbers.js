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
  while(l1.length && l2.length){

  }
}

module.exports = addTwoNumbers;
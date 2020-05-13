const addTwoNumbers = import('./addTwoNumbers');

function ListNode(val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const expected = new ListNode(7, new ListNode(0, new ListNode(8)));

test('expect to return [7, 0, 8]', () => {
  expected(addTwoNumbers(list1, list2).toBe(expected));
})
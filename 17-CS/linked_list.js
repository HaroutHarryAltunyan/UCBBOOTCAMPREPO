class Node {
  constructor(payload, next = null, prev = null) {
    this.payload = payload;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  addToList(node) {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  removeFromList(node) {
    node.next?.prev = node.prev;
    node.prev?.next = node.next;
    
    node.next = null;
    node.prev = null;
  }
}

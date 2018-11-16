class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
  }
  appendToTail (value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      return
    }
    let n = this.head
    while (n.next !== null) {
      n = n.next
    }
    n.next = node
  }
  deleteNode (value) {
    if (!this.head) {
      return this.head
    }
    let n = this.head
    if (n.value === value) {
      return this.head.next
    }
    while (n.next !== null) {
      if (n.next.value === value) {
        n.next = n.next.next
        return this.head
      }
      n = n.next
    }
    return this.head
  }
}

module.exports = { SinglyLinkedList }

//queue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.front) return null;
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.length--;
    return value;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }
}

function reverseQueue(queue) {
  const reversedQueue = new Queue();

  // Dequeue elements from the original queue and enqueue them to the reversed queue
  while (!queue.isEmpty()) {
    reversedQueue.enqueue(queue.dequeue());
  }

  return reversedQueue;
}

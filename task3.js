//stacks


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (!this.top) return null;
        const value = this.top.value;
        this.top = this.top.next;
        this.length--;
        return value;
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    isEmpty() {
        return this.length === 0;
    }
}

function reverseString(str) {
    const stack = new Stack();
    let reversed = '';

    // Push each character onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Pop each character from the stack to reverse the string
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed;
}

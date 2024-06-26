//trees


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Helper method for in-order traversal
    inOrderHelper(node, result) {
        if (node) {
            this.inOrderHelper(node.left, result);
            result.push(node.value);
            this.inOrderHelper(node.right, result);
        }
    }

    // In-order traversal: left -> root -> right
    inOrder() {
        const result = [];
        this.inOrderHelper(this.root, result);
        return result;
    }

    // Helper method for pre-order traversal
    preOrderHelper(node, result) {
        if (node) {
            result.push(node.value);
            this.preOrderHelper(node.left, result);
            this.preOrderHelper(node.right, result);
        }
    }

    // Pre-order traversal: root -> left -> right
    preOrder() {
        const result = [];
        this.preOrderHelper(this.root, result);
        return result;
    }

    // Helper method for post-order traversal
    postOrderHelper(node, result) {
        if (node) {
            this.postOrderHelper(node.left, result);
            this.postOrderHelper(node.right, result);
            result.push(node.value);
        }
    }

    // Post-order traversal: left -> right -> root
    postOrder() {
        const result = [];
        this.postOrderHelper(this.root, result);
        return result;
    }

    // Helper method to calculate the height of a subtree
    height(node) {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    // Check if the tree is balanced
    isBalancedHelper(node) {
        if (!node) return true;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        if (Math.abs(leftHeight - rightHeight) <= 1 &&
            this.isBalancedHelper(node.left) &&
            this.isBalancedHelper(node.right)) {
            return true;
        }
        return false;
    }

    // Check if the tree is balanced
    isBalanced() {
        return this.isBalancedHelper(this.root);
    }
}

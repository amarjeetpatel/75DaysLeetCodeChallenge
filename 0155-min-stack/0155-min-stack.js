var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

// Push element onto stack
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    // Push min value
    if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }
};

// Remove top element
MinStack.prototype.pop = function() {
    const removed = this.stack.pop();

    // Sync with minStack
    if (removed === this.getMin()) {
        this.minStack.pop();
    }
};

// Get top element
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

// Retrieve minimum element
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
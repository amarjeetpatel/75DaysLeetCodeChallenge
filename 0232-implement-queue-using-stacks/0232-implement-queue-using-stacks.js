
var MyQueue = function() {
    
};

/** 
 * @param {number} x
 * @return {void}
 */
var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

// Push element x to the back of queue
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

// Move elements only when needed
MyQueue.prototype._move = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
};

// Removes the element from in front of queue and returns it
MyQueue.prototype.pop = function() {
    this._move();
    return this.outStack.pop();
};

// Get the front element
MyQueue.prototype.peek = function() {
    this._move();
    return this.outStack[this.outStack.length - 1];
};

// Returns whether the queue is empty
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
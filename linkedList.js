class List  {
    constructor(key) {
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}
class Stack {
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.map = {};
        this.head = null;
        this.tail = null;
    }
    push(key) {
        this.insert(key);  
    }
    pop() {
        const temp = this.delele()
        delete this.tail
        return temp.key
    }
    delele(){
        this.length--
        return this.tail
    }
    insert(key, val) {
        let node = new List(key, val);
        if (!this.tail) {
            this.tail = node;
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length ++
        this.map[key] = node;
    }
    size(){
        return this.length
    }
}

const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop()) // 3
console.log(myStack.size())// 2
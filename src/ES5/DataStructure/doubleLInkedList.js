function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
}

var node = function (val) {
    this.value = val;
    this.next = null;
    this.previous = null;
}

DoublyLinkedList.prototype.push = function (val) {
    var head = this.head,
        current = head,
        previous = head;
    if (!head) {
        this.head = { value: val, previous: null, next: null };
    }
    else {
        while (current && current.next) {
            previous = current;
            current = current.next;
        }
        current.next = { value: val, previous: current, next: null }
    }
}

DoublyLinkedList.prototype.print  = function (params) {
    console.log(this.head)
}
//var dll = new DoublyLinkedList();
// dll.push(2);
// dll.push(3);
// dll.push(4);
// dll.push(5);
// dll.print()


function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}
 
function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}
 
DoublyList.prototype.add = function(value) {
    var node = new Node(value);
 
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
 
    this._length++;
 
    return node;
};
DoublyList.prototype.print  = function (params) {
    console.log(this.head)
}
var dll = new DoublyList();
dll.add(2);
dll.add(3);
dll.add(4);
dll.add(5);
dll.print()
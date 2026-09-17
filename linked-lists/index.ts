class Node {
    public next: Node | null = null;

    constructor(
        public value: number
    ){};
};

class LinkedList {
    private head: Node | null = null;
    private tail: Node | null = null;
    private length: number = 0;

    constructor(value: number){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    };
    

    // O(1)
    push(value: number): this {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            return this;
        };
        this.tail!.next = newNode;
        this.tail = newNode; 
        this.length++;
        return this;
    };

    // O(n)
    pop(): Node | null {
        if(!this.head) return null;
        let temp = this.head;
        let prev = temp;
        while(temp.next){
            prev = temp;
            temp = temp.next;
        };
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        };
        return temp;
    };

    // O(1)
    unshift(value: number): this {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        };
        this.length++;
        let temp = this.head;
        this.head = newNode;
        newNode.next = temp;
        return this;
    };

    // O(1)
    shift(): Node | null {
        if(!this.head) return null;
        if(this.head === this.tail){
            let x = this.head;
            this.head = null;
            this.tail = null;
            return x;
        };
        this.length--;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp;
    }; 

    // O(n)
    get(index: number): Node | null {
        if(!this.head) return null;
        if(index >= this.length || index < 0) return null;
        let temp = this.head;
        let tempIndex = 0;
        while(tempIndex !== index){
            temp = temp.next!;
            tempIndex++;
        };
        return temp;
    };

    // O(n)
    set(index: number, value: number): boolean {
       if(!this.head) return false;
        let temp = this.get(index);
        if(!temp) return false;
        temp.value = value;
        return true;
    };
};

const lk = new LinkedList(4);
lk.push(5);
lk.push(3);
console.log(lk.pop());
console.log(lk);
lk.unshift(10);
console.log(lk);
console.log(lk.shift());
console.log(lk);
lk.push(9);
lk.push(11);
console.log(lk.get(4));
lk.set(0, 19);
console.log(lk);
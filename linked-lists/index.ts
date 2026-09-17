class Node {
    public next: Node | null = null;

    constructor(
        public value: number
    ){};
};

class LinkedList {
    public head: Node | null = null;
    public tail: Node | null = null;
    public length: number = 0;

    constructor(value: number){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    };

    push(value: number): this {

        const newNode = new Node(value);
        this.length++;

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            return this;
        };

        this.tail!.next = newNode;
        this.tail = newNode; 
        
        return this;
    };
};

const lk = new LinkedList(4);
lk.push(5);
lk.push(3);
console.log(lk);
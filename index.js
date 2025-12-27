class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class Binary{
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root === null){
            this.root = newNode
        }else {
            let current = this.root;
            while (true){  // El truco es el while.
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode
                        return this  // Aqui se asigna
                    }
                    current = current.left
                }else{
                    if(!current.right){
                        current.right = newNode;
                        return this
                    }
                    current = current.right  // Aqui manda a uno de los lados y reinicai
                }
            }
        }
    }
}

const tree = new Binary();

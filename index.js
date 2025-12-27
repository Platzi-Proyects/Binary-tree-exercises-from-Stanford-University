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
    totalNodes() {
        if (!this.root) return 0;

        // función recursiva
        // Analiza los dos
        const countNodes = (node) => {
            if (node === null) return 0;

            // No puede retiornas hasta que complete todo
            // Analiza los lados de cada uno de los nodos.
            // Llamando a otra vez la fuacion y queda en stack la otra
            return 1 + countNodes(node.left) + countNodes(node.right);
        };

        return countNodes(this.root);
    }
    maxDepth() {
        if (!this.root) return 0;

        // Fucnion

        const getDepth = (node) => {
            // Si no hay nada, hace nada
            if (node === null) return 0;

            // Calcula la profunddidad de ambas ramas. Usa recursividad para para cambiar el root y analziar los dos lados.
            const leftDepth = getDepth(node.left);
            const rightDepth = getDepth(node.right);

            // Usa math para ver cual de los dos es mas grande y usar + 1 del orignal
            return 1 + Math.max(leftDepth, rightDepth);
        };

        // Hace el llamado a la fucion mandando el root actual
        return getDepth(this.root);
    }
}

const tree = new Binary();

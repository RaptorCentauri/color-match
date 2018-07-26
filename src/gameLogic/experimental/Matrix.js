import convertToSquareBoard from '../../gameLogic/convertToMatrix.js'

class Matrix {
    constructor(size){
        this.size = size;
        // this.createMatrix();
        this.createMap();
        this.getAllEdges();
    }


    createMap = () => {
        this.map = new Map();
        for (let i = 0; i < this.size; i++) {
            this.map.set(i+1, null)
        }
    }

     createMatrix = () => {
        let arr = [];
        for (let i = 0; i < this.size ; i++) {
            arr.push({id: i+1, value: null})
        }

        this.boo = arr.convertToSquareBoard();        
    }

    getNorthEdge = () => {
        this.northEdge = new Set();
        let edgeSize = Math.sqrt(this.size);

        for (let i = 0; i < edgeSize; i++) {
            this.northEdge.add(i+1);
        }
    }

    getEastEdge = () => {
        this.eastEdge = new Set();

        for (let i = 0; i < this.size; i++) {
            let k = i+1
            if(k%4===0){
                this.eastEdge.add(k);
            }
        }
    }

    getSouthEdge = () => {
        this.southEdge = new Set();

        for (let i = 0; i < this.size; i++) {
            let k = i+1; 
            if(this.size-k<4){
                this.southEdge.add(k);
            }
        }
    }

    getWestEdge = () => {
        this.westEdge = new Set();
        for (let i = 0; i < this.size; i++) {
            let k = i+1; 
            if(k%4===1){
                this.westEdge.add(k);
            }
        }
    }

    getAllEdges = () => {
        this.getNorthEdge();
        this.getSouthEdge();
        this.getEastEdge();
        this.getWestEdge();
    }

    getNorthNeighbor = (id) => {
        let northNeighbor = null;

        if(!this.northEdge.has(id)){
            let edgeSize = Math.sqrt(this.size);
            northNeighbor = id-edgeSize;
        }
        return northNeighbor;
    }

    getSouthNeighbor = (id) => {
        let southNeighbor = null;

        if(!this.southEdge.has(id)){
            let edgeSize = Math.sqrt(this.size);
            southNeighbor = id+edgeSize;
        }
        return southNeighbor;
    }

    getEastNeighbor = (id) => {
        let eastNeighbor = null;

        if(!this.eastEdge.has(id)){
            eastNeighbor = id+1;
        }
        return eastNeighbor;
    }

    getWestNeighbor = (id) => {
        let westNeighbor = null;

        if(!this.westEdge.has(id)){
            westNeighbor = id-1;
        }
        return westNeighbor;
    }

    getNeighbors = (id) => {
        let neighbors = new Set()
        neighbors.add(this.getNorthNeighbor(id))
        neighbors.add(this.getSouthNeighbor(id))
        neighbors.add(this.getEastNeighbor(id))
        neighbors.add(this.getWestNeighbor(id))

        return neighbors
    }






}


export default Matrix




let newMatrix = new Matrix(16);

// console.log(newMatrix.getNorthNeighbor(8));
// console.log(newMatrix.getSouthNeighbor(8));
// console.log(newMatrix.getEastNeighbor(8));
// console.log(newMatrix.getWestNeighbor(8));

console.log(newMatrix.getNeighbors(8));









// newMatrix.getNorthEdge();





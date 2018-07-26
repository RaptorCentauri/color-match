import convertToSquareBoard from '../../../gameLogic/convertToMatrix.js'

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

    fillValues = (limit) => {
        for (const [key, value] of this.map) {
                this.map.set(key, Math.floor(Math.random()*limit))
        }
    }

    getValueOfId = (id) => {
        return this.map.get(id);
    }

    getEquivalentNeighbors = (id) => {
        let equivalentNeighbors = new Map();

        let neighbors = this.getNeighbors(id);

        neighbors.forEach(n =>{
            if (this.getValueOfId(id) === this.getValueOfId(n)) {
                equivalentNeighbors.set(n, this.getValueOfId(n))
            }
        })

        return equivalentNeighbors
    }





}


export default Matrix




let newMatrix = new Matrix(16);


newMatrix.fillValues(4);
console.log(newMatrix.map);
console.log(newMatrix.getValueOfId(11))
console.log(newMatrix.getNeighbors(11))
console.log(newMatrix.getEquivalentNeighbors(11));













// newMatrix.getNorthEdge();





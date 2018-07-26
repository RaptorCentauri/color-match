import convertToSquareBoard from '../../../gameLogic/convertToMatrix.js'

class Matrix {
    constructor(size){
        this.size = size;
        this.createMap();
        this.getAllEdges();
    }

    createMap = () => {
        this.map = new Map();
        for (let i = 0; i < this.size; i++) {
            this.map.set(i+1, null)
        }
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


    fillEmptyValues = (val) => {
        if (typeof(val) != 'function') {
            for (const [key, value] of this.map) {
                if (this.map.get(key) === null) {
                    this.map.set(key, val)
                }
            }
        }

        if (typeof(val) === 'function') {
            for (const [key, value] of this.map) {
                if (this.map.get(key) === null) {
                    this.map.set(key, val())
                }
            }
        }
    }

    getValueOfId = (id) => {
        return this.map.get(id);
    }

    setValueOfid = (id, val, noCall) => {
        try {
            if(id > this.map.size) throw new RangeError(`You passed an ID (${id}) larger than the Matrix size (${this.map.size})!`);
            if(id <= 0) throw new RangeError(`ID must be greater than zero!`);
            if(noCall && (noCall != 'noCall')) throw new Error (`If you want to pass in a function without calling it, set the noCall parameter to 'noCall'`)


            if (typeof(val) != 'function') {
                this.map.set(id, val)
            }
    
            if (typeof(val) === 'function') {
                if (noCall) {
                    this.map.set(id, val)
                }
                else{
                    this.map.set(id, val())
                }
            }

        } catch (e) {
            console.error(e)
        }

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

    deleteValueOfId = (id) => {
        this.map.set(id, null)
    }

    drop = () => {
        let rowSize = Math.sqrt(this.size);
        this.southEdge.forEach(e =>{
            let dropMap = new Map();

            do {
               dropMap.set(e, this.getValueOfId(e))
               e = e-rowSize;
            } while (e-rowSize > -(rowSize));

            let setOfNulls = new Set();

            for (const [key, value] of dropMap) {
                if(this.getValueOfId(key) === null){
                    setOfNulls.add(key)
                }
             }

             if(setOfNulls.size > 0){
                let setOfValid = new Set();

                for (const [key, value] of dropMap) {
                    if(this.getValueOfId(key) != null){
                        setOfValid.add(key)
                    }
                }

                let rMap = dropMap;

                

                let valds = setOfValid.values();

                for (const [key, value] of dropMap) {
                    let y = valds.next().value
                    
                    dropMap.set(key, rMap.get(y))
                    
                    if(y != undefined){
                        dropMap.set(key, rMap.get(y))
                    }
                    else{
                        dropMap.set(key, null)
                    }
                }

                for (const [key, value] of dropMap) {
                    this.map.set(key, value)
                }
            }
        })
    
    }


    display = () => {
        let arr = Array.from(this.map.values())
        let show = arr.convertToSquareBoard();   
        show.forEach(row =>{
            console.log(row);
        })
    }

    displayPretty = () => {
        let arr = Array.from(this.map.values())

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === null) arr[i] = '*'

            arr[i] = arr[i].toString()
        }


        let show = arr.convertToSquareBoard();   
        show.forEach(row =>{
            console.log(row);
        })
    }

}


export default Matrix


let myName = () => 'dave'


let newMatrix = new Matrix(16);

newMatrix.setValueOfid(3, myName)


newMatrix.displayPretty()

let jo = newMatrix.getValueOfId(3)
// console.log('jo', jo);
let g= jo()

console.log('g', g);







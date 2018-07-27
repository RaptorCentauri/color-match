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
  

    fillEmptyValues = (val, noCall) => {
        try {
            if(noCall && (noCall != 'noCall')) throw new Error (`If you want to pass in a function without calling it, set the noCall parameter to 'noCall'`)

            if (typeof(val) != 'function') {
                for (const [key, value] of this.map) {
                    if (this.map.get(key) === null) {
                        this.map.set(key, val)
                    }
                }
            }
    
            if (typeof(val) === 'function') {
                for (const [key, value] of this.map) {
                    if(noCall){
                        if (this.map.get(key) === null) {
                            this.map.set(key, val)
                        }
                    }
                    else{
                        if (this.map.get(key) === null) {
                            this.map.set(key, val())
                        }
                    }
                }
            }
        } catch (e) {
            console.error(e)
        }
    }



/*******************************Edge Functions**********************************

/*
getNorthEdge() return a Set of all IDs on the north edge of the matrix
getEastEdge() return a Set of all IDs on the east edge of the matrix
getSouthEdge() return a Set of all IDs on the south edge of the matrix
getWestEdge() return a Set of all IDs on the west edge of the matrix
getAllEdges() return a Set of all IDs on the edge of the matrix
*/

getNorthEdge = () => {
    this.northEdge = new Set();
    let edgeSize = Math.sqrt(this.size);

    for (let i = 0; i < edgeSize; i++) {
        this.northEdge.add(i+1);
    }
}

getEastEdge = () => {
    let rowSize = Math.sqrt(this.size)

    this.eastEdge = new Set();

    for (let i = 0; i < this.size; i++) {
        let k = i+1
        if(k%rowSize===0){
            this.eastEdge.add(k);
        }
    }
}

getSouthEdge = () => {
    let rowSize = Math.sqrt(this.size)

    this.southEdge = new Set();

    for (let i = 0; i < this.size; i++) {
        let k = i+1; 
        if(this.size-k<rowSize){
            this.southEdge.add(k);
        }
    }
}

getWestEdge = () => {
    let rowSize = Math.sqrt(this.size)
    this.westEdge = new Set();
    for (let i = 0; i < this.size; i++) {
        let k = i+1; 
        if(k%rowSize===1){
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

/***************************************************************************/





// NeighborFunctions==================================================
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

//=================================================================


//Value Functions==============================================================
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

    deleteValueOfId = (id) => {
        this.map.set(id, null)
    }

//=================================================================


//Print Functions=========================================================
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

//=================================================================

//Chain Functions=========================================================
    getChainfromID = (id) => {
        let toBeDestroyed = new Set();

        let alreadyChecked = new Set()

        let playChain = (pos) => {
            let targetID = pos;

            let loopSet = new Set()

            alreadyChecked.add(targetID)

            toBeDestroyed.add(targetID);

            let targetNeighbors = this.getEquivalentNeighbors(targetID)

            for (const [key, value] of targetNeighbors) {
                if(targetNeighbors.get(key) === this.map.get(targetID)){
                    loopSet.add(key)
                }
            }

            loopSet.forEach((item)=>{
                if(!alreadyChecked.has(item)){
                    playChain(item)
                }
            })
            }

        playChain(id);

        return toBeDestroyed;

    }

    destroyChainfromID = (id) => {
        let chain = this.getChainfromID(id);
        chain.forEach(c => {
            this.deleteValueOfId(c)
        })
    }

    replaceChainfromID = (id, val, noCall) => {

        let chain = this.getChainfromID(id)
        chain.forEach(c => {
            this.setValueOfid(c, val, noCall)
        })

    }
//========================================================================


//Drop Functions=========================================================
    dropDown = () => {
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

//========================================================================




}


export default Matrix
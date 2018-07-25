
/*
getNeighbors finds the position and values of neighboring indeces of a given index.
getNeighbors is function that is called on an Array object. 
It expects an object like the following: {row: number, col: number}.
It returns a Map that contains following: [{row: number, col: number}, value] for each neighbor;
*/


const getIdentifier = (obj) => {
    return Object.keys(obj);
}

const getNeighbors = Object.defineProperty(Array.prototype, 'getNeighbors', {
    value(obj) {
        // let name = 'dave'
        try {
            if (typeof(obj) != 'object') throw new TypeError('getNeighbors expects an object!')
            
            if(!obj.hasOwnProperty('row')) throw new ReferenceError('getNeighbors expects a row property!')

            if (!obj.hasOwnProperty('col')) throw  new ReferenceError('getNeighbors expects a col property!')

            if (typeof (obj.row) != 'number') throw new TypeError('getNeighbors expects an obj.row to be a number!')

            if (typeof (obj.col) != 'number') throw new TypeError('getNeighbors expects an obj.col to be a number!')

            if (obj.row > this.length) throw new RangeError(`Attmpted to call getNeighbors with a row value of ${obj.row}! ${this.constructor.name} only has ${this.length} rows!`)

            if (obj.col > this[0].length) throw new RangeError(`Attmpted to call getNeighbors with a col value of ${obj.col}! ${this.constructor.name} only has ${this.length} col!`) // need find longest col


            if (Object.keys(obj).length != 2) throw 'getNeighbors expects an object with only 2 keys: row & col!'

        const neighbors = new Map();
        // const neighbors = [];


        //north neighbor
        if ((obj.row - 1) >= 0) neighbors.set({row: obj.row-1, col: obj.col}, this[obj.row - 1][obj.col])
        // if ((obj.row - 1) >= 0) neighbors.push({row: obj.row-1, col: obj.col})


        //south neighbor
        if ((obj.row + 1) <= (this.length - 1)) neighbors.set({row:obj.row+1, col:obj.col}, this[obj.row + 1][obj.col])
        // if ((obj.row + 1) <= (this.length - 1)) neighbors.push({row:obj.row+1, col:obj.col})


        //east neighbor
        if ((obj.col + 1) <= (this[obj.row].length - 1)) neighbors.set({row:obj.row, col:obj.col+1}, this[obj.row][obj.col + 1])
        // if ((obj.col + 1) <= (this[obj.row].length - 1)) neighbors.push({row:obj.row, col:obj.col+1})


        //west neighbor
        if ((obj.col - 1) >= 0) neighbors.set({row:obj.row, col:obj.col-1}, this[obj.row][obj.col - 1])
        // if ((obj.col - 1) >= 0) neighbors.push({row:obj.row, col:obj.col-1})

        
        return neighbors

        } catch (e) {
            throw e
        }
    }
});


export default getNeighbors;

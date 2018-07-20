
/*
getNeighbors finds the position and values of neighboring indeces of a given index.
getNeighbors is function that is called on an Array object. 
It expects an object like the following: {row: number, col: number}.
It returns a Map that contains following: [{row: number, col: number}, value] for each neighbor;
*/

const getNeighbors = Object.defineProperty(Array.prototype, 'getNeighbors', {
    value(obj) {
        try {
            if (typeof(obj) != 'object') throw 'getNeighbors expects an object!'  

            if (typeof (obj.row) != 'number') throw 'getNeighbors expects an obj.row to be a number!'

            if (typeof (obj.col) != 'number') throw 'getNeighbors expects an obj.col to be a number!'
            
            if(!obj.hasOwnProperty('row')) throw 'getNeighbors expects a row property!'

            if (!obj.hasOwnProperty('col')) throw 'getNeighbors expects a col property!'

            if (Object.keys(obj).length != 2) throw 'getNeighbors expects an object with only 2 keys: row & col!'

        const neighbors = new Map();

        //north neighbor
        if ((obj.row - 1) >= 0) neighbors.set({row: obj.row-1, col: obj.col}, this[obj.row - 1][obj.col])

        //south neighbor
        if ((obj.row + 1) <= (this.length - 1)) neighbors.set({row:obj.row+1, col:obj.col}, this[obj.row + 1][obj.col])

        //east neighbor
        if ((obj.col + 1) <= (this[obj.row].length - 1)) neighbors.set({row:obj.row, col:obj.col+1}, this[obj.row][obj.col + 1])

        //west neighbor
        if ((obj.col - 1) >= 0) neighbors.set({row:obj.row, col:obj.col-1}, this[obj.row][obj.col - 1])
        
        return neighbors

        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
});

export default getNeighbors;

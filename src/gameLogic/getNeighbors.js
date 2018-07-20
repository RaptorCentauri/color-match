let colors = [
['r','b', 'y'],
['r', 'y', 'y'],
['b', 'r', 'y']
]

Object.defineProperty(Array.prototype, 'getNeighbors', {
        value(obj) {
            try {
                if (typeof(obj) != 'object') throw 'getNeighbors expects an object!'  

                if (typeof (obj.row) != 'number') throw 'getNeighbors expects an obj.row to be a number!'

                if (typeof (obj.col) != 'number') throw 'getNeighbors expects an obj.col to be a number!'
                
                if(!obj.hasOwnProperty('row')) throw 'getNeighbors expects a row property!'

                if (!obj.hasOwnProperty('col')) throw 'getNeighbors expects a col property!'

                if (Object.keys(obj).length != 2) throw 'getNeighbors expects an object with only 2 keys: row & col!'

            const neighbors = new Map();

            if ((obj.row - 1) >= 0) {
                const north = this[obj.row - 1][obj.col];
                neighbors.set({row: obj.row-1, col: obj.col}, north)
            }

            if ((obj.row + 1) <= (this.length - 1)) {
                const south = this[obj.row + 1][obj.col];
                neighbors.set({row:obj.row+1, col:obj.col}, south)
            }

            if ((obj.col + 1) <= (this[obj.row].length - 1)) {
                const east = this[obj.row][obj.col + 1];
                neighbors.set({row:obj.row, col:obj.col+1}, east)
            }

            if ((obj.col - 1) >= 0) {
                const west = this[obj.row][obj.col - 1];
                neighbors.set({row:obj.row, col:obj.col-1}, west)
            }

            return neighbors

            } catch (error) {
                console.error(`Error: ${error}`);
            }
    }
});

let moo = colors.getNeighbors({row:1, col: 1});
// let moo = colors.getNeighbors("1");

console.log(moo.entries());



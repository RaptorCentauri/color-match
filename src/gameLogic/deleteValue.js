
const deleteValue = Object.defineProperty(Array.prototype, 'deleteValue', {
    value(obj) {
        try {
            if (typeof(obj) != 'object') throw new TypeError('getNeighbors expects an object!')
            
            if(!obj.hasOwnProperty('row')) throw new ReferenceError('getNeighbors expects a row property!')

            if (!obj.hasOwnProperty('col')) throw  new ReferenceError('getNeighbors expects a col property!')

            if (typeof (obj.row) != 'number') throw new TypeError('getNeighbors expects an obj.row to be a number!')

            if (typeof (obj.col) != 'number') throw new TypeError('getNeighbors expects an obj.col to be a number!')

            if (obj.row > this.length) throw new RangeError(`Attmpted to call getNeighbors with a row value of ${obj.row}! ${this.constructor.name} only has ${this.length} rows!`)

            if (obj.col > this[0].length) throw new RangeError(`Attmpted to call getNeighbors with a col value of ${obj.col}! ${this.constructor.name} only has ${this.length} col!`) // need find longest col

            if (Object.keys(obj).length != 2) throw 'getNeighbors expects an object with only 2 keys: row & col!'

        this[obj.row][obj.col] = null;

        } catch (e) {
            throw e
        }
    }
});

export default deleteValue;
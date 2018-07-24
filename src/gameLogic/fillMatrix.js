/*
fillMatrix() will replace any null value in the matrix with a new given value (or range of values); 
*/


const fillMatrix = Object.defineProperty(Array.prototype, 'fillMatrix', {
    value(range) {
        try {
            if (typeof(range) != 'number') throw new TypeError('fillMatrix expects a number!')
            if (range < 0) throw new RangeError(`Range must be 0 or above!`)

            this.forEach(row => {
                for (let i = 0; i < row.length; i++) {
                    if (row[i] == null) row[i] = Math.floor(Math.random() * range);
                }
            })

        } catch (e) {
            throw e
        }
    }
});


export default fillMatrix;
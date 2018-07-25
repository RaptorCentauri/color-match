/*
fillMatrix() will replace any null value in the matrix with a new given value (or range of values); 
*/


const generateID = Object.defineProperty(Array.prototype, 'generateID', {
    value() {
        try {
            let count = (this.length * this[0].length)
            // if (typeof(range) != 'number') throw new TypeError('fillMatrix expects a number!')
            // if (range < 0) throw new RangeError(`Range must be 0 or above!`)
            let id = 0;

            do {
                for (let i = 0; i < this.length; i++) {
                    for (let k = 0; k < this[i].length; k++) {
                        console.log('id', id);
                        console.log('==========================================');
                    }
                }
                id++
                
            } while (id <= count);


            // for (let i = 0; i < this.length; i++) {
            //     for (let k = 0; k < this[i].length; k++) {
            //         console.log('i', i);
            //         console.log('k', k);
            //         console.log(id);
            //         console.log('==========================================');
            //     }
            // }

        } catch (e) {
            throw e
        }
    }
});


export default generateID;

let test = [
    [ { id: null, value: null },
        { id: null, value: null },
        { id: null, value: null } ],
      [ { id: null, value: null },
        { id: null, value: null },
        { id: null, value: null } ],
      [ { id: null, value: null },
        { id: null, value: null },
        { id: null, value: null } ]
]


test.generateID();
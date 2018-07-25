/*
fillMatrix() will replace any null value in the matrix with a new given value (or range of values); 
*/


const generateID = Object.defineProperty(Array.prototype, 'generateID', {
    value() {
        try {
            let rows = (this.length-1);
            let col =(this[0].length-1);

            let count = (this.length * this[0].length)
            // if (typeof(range) != 'number') throw new TypeError('fillMatrix expects a number!')
            // if (range < 0) throw new RangeError(`Range must be 0 or above!`)
            let id = 0;
            let r=0;
            let c=0;
            

            do {
                do {
                  this[r][c].id = id;  
                console.log(id);
                
                  id++
                  c++;  
                } while (c <= col);
                console.log('next');
                console.log(c);
                
                
                r++;
            } while (r <= rows);




            // do {
            // //     this[]
            //     for (let i = 0; i < this.length; i++) {
            //         for (let k = 0; k < this[i].length; k++) {
            //             // console.log('id', id);
            //             test[i][k].id = id+(i-1);
            //         }
            //     }
            //     id++
                
            // } while (id <= count);
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

console.log(test);

import { isNull } from "util";

/*
shiftMatrixDown will move any all indeces down vertically as long as there is an empty spot
*/


const shiftMatrixDown = Object.defineProperty(Array.prototype, 'shiftMatrixDown', {
    value() {
        try {
            //check if bottom row has missing elemnt;
            for (let i = 0; i < this.length; i++) {
                
                let checkRowVal = (this.length-1)-i;
                let newRowVal = checkRowVal-1;

                // console.log(`================ itteration ${i} ================`);
                let checkRow = this[checkRowVal];
                let newRow = this[newRowVal];


                if (checkRowVal > 0) {
                    
                

                for (let k = 0; k < checkRow.length; k++) {
                    // console.log(`############## SUB-itteration ${k} ##############`);

                    let checkPos = checkRow[k]

                    if (checkPos === undefined) {
                        // console.log('crv', checkRowVal);
                        
                        // console.log('nrv', newRowVal);
                        // console.log('k', k);
                        
                        
                        let newValue = this[newRowVal][k];
                        this[checkRowVal][k] = newValue;
                        // console.log('alpha', newRow[k]);
                        delete newRow[k];
                        // console.log('beta', newRow[k]);

                        
                    }
                }

            }

            }

   

            // this[2 row][1 col] = this[1 row][1 col];
            // this[1 row][1 col] = this[0 row][1 col];
            // delete this[0 row][1 col];

            // this[2][1] = this[1][1];
            // this[1][1] = this[0][1];
            // delete this[0][1];
      
        } catch (e) {
            throw e
        }
    }
});

export default shiftMatrixDown


let testMatrix = [[0,1,3],[4,5,6],[7,8,9]];

console.log('before', testMatrix);


delete testMatrix[2][1];
// delete testMatrix[2][2];

console.log('middle', testMatrix);


testMatrix.shiftMatrixDown();

console.log('after', testMatrix);

/*
shiftMatrixDown will move any all indeces down vertically as long as there is an empty spot
*/

const shiftMatrixDown = Object.defineProperty(Array.prototype, 'shiftMatrixDown', {
    value() {
        try {
            for (let i = 0; i < this.length; i++) {
                let checkRowVal = (this.length-1)-i;
                let newRowVal = checkRowVal-1;

                let checkRow = this[checkRowVal];
                let newRow = this[newRowVal];

                if (checkRowVal > 0) {

                    for (let k = 0; k < checkRow.length; k++) {
                        let checkPos = checkRow[k]

                        if (checkPos === undefined) {
                            let newValue = this[newRowVal][k];
                            this[checkRowVal][k] = newValue;
                            delete newRow[k];
                        }
                    }
                }

            }
      
        } catch (e) {
            throw e
        }
    }
});

export default shiftMatrixDown
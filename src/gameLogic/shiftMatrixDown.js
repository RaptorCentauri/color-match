/*
shiftMatrixDown will move any all indeces down vertically as long as there is an empty spot
*/

const shiftMatrixDown = Object.defineProperty(Array.prototype, 'shiftMatrixDown', {
    value() {
        try {
            for (let i = 0; i < this.length; i++) {
                let checkRowIndex = (this.length-1)-i; 
                let rowAboveIndex = checkRowIndex-1;

                let checkRow = this[checkRowIndex];
                let rowAbove = this[rowAboveIndex];

                if (checkRowIndex > 0) {
                    for (let k = 0; k < checkRow.length; k++) {
                        let positionToEval = checkRow[k]

                        if (positionToEval === undefined) {
                            let newValue = this[rowAboveIndex][k];
                            this[checkRowIndex][k] = newValue;
                            delete rowAbove[k];
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
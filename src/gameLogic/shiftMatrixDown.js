/*
shiftMatrixDown will move any all indeces down vertically as long as there is an empty spot
*/
const shiftMatrixDown = Object.defineProperty(Array.prototype, 'shiftMatrixDown', {
    value() {
        try {
            //This drop() function will move the entire matrix down, filling a null space with the value above it, and shifting all other values down vertically;
            let drop = () =>{
                for (let i = 0; i < this.length; i++) {
                    let checkRowIndex = (this.length-1)-i; //index for the row to evaluate
                    let rowAboveIndex = checkRowIndex-1; //index for the row above; 
                    let checkRow = this[checkRowIndex]; //the row to evaluate
                    let rowAbove = this[rowAboveIndex]; //the row above;

                    if (checkRowIndex > 0) {
                        for (let k = 0; k < checkRow.length; k++) {
                            let positionToEval = checkRow[k]; //The current postion in the row being evaluated
                        
                            if (positionToEval === null) {
                                let newValue = this[rowAboveIndex][k]; //get the value in the space direcely above the position we are evaluating
                                this[checkRowIndex][k] = newValue; // set the space we are evaluating equal to the value we just got
                                rowAbove[k] = null; // set the value in the space above to be null
                            }
                        }
                    }
                }
            }

            //Because drop() will only run as many times as there are rows in the matrix, we use the following do-while to ensure we don't have any unwanted gaps
            let count = this.length-1; // set count varaible to the index of the last row;

            do {
                let hasNull =(this[count].some((e) => e === null)); //determine if row containts any null elements;
                if (hasNull) drop(); //if it does contain null elements, run the drop() function;
                count--;
            } while (count >= 0);

        } catch (e) {
            throw e
        }
    }
});

export default shiftMatrixDown;
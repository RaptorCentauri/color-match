import convertToSquareBoard from '../../gameLogic/convertToMatrix.js'

class Matrix {
    constructor(size){
        this.size = size;
        this.createMatrix();
    }

     createMatrix = () => {
        let arr = [];
        for (let i = 0; i < this.size ; i++) {
            arr.push({id: i+1, value: null})
        }

        this.boo = arr.convertToSquareBoard();        
        // return this.boo;
    }




}


export default Matrix




let newMatrix = new Matrix(9).boo;

console.log(newMatrix);


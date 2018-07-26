class Matrix {
    constructor(size){
        this.size = size;
    }

     createArray = () => {
        let arr = [];
        // console.log('size', this.size);
        for (let i = 0; i < this.size ; i++) {
            arr.push({id: i+1, value: null})
            // console.log(i+1);
        }

        return arr
    }

}


export default Matrix


let mat = new Matrix(9);

let n = mat.createArray();

console.log(n);

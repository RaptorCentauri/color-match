
const convertToSquareBoard = Object.defineProperty(Array.prototype, 'convertToSquareBoard', {
    value() {
        try {
            let size= this.length
            if(Math.sqrt(size) % 1 != 0){
                throw new Error('convertToSquareBoard only works on arrays with a perfect square size!')
            }
            else{
                console.log('is square');

            }
        
            // let width = Math.sqrt(size);



    
            // let newMatrix = this.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) 
            //   : rows[rows.length-1].push(key)) && rows, []);
    
            // return newMatrix; 
            
        } catch (e) {
            console.error(e)
        }


         
    }
});



export default convertToSquareBoard

let test= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let n = test.convertToSquareBoard()
// console.log(n)
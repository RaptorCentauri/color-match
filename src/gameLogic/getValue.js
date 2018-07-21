import getNeighbors from "./getNeighbors";
import createMatrix from "./createMatrix";


// getValue = (arr, row, col) => {
//     let val = arr[row][col];
//     console.log('val', val);
// }

// getValue = () => {
//     // return 'an error is here';
//     // throw 'nope!'
//     try {
//         if(true) throw new Error('foo bar')
//     } catch (error) {
//         throw error
//         // throw new Error(error)
//     }
// }

// let bar = getValue();

let rows = 5;
let cols = 5;
let range = 4;

let testMatrix = createMatrix(rows, cols, range);

let pos = {
    row: 2,
    col: 1
}

let str= 'string';

let bar = testMatrix.getNeighbors(str)

console.log(bar);

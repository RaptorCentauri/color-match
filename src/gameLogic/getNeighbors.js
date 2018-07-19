const myArr = [
['a','b', 'c', 'd', 'e'],
['f', 'g', 'h', 'i', 'j'],
['k', 'l', 'm', 'n', 'o'],
['p', 'q', 'r', 's', 't'],
['u', 'v', 'w', 'x', 'y']
]

let colors = [
['r','b', 'y'],
['r', 'y', 'y'],
['b', 'r', 'y']
]

//create matrix
let foo = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 4)));



createMatrix = (rows, col) => {
    let foo = Array.from({ length: rows }, () => Array.from({ length: col }, () => Math.floor(Math.random() * 4)));
    return foo;
}

// console.log('foo', foo);
// console.log('myArr', myArr);

// let bar = createMatrix(5, 5);
// console.log(bar);


// Array.prototype.getNeighbors =

// Array.prototype.getNeighbors  = (arr, row, col) => {
//     const neighbors = {};
//     const home = arr[row][col];

//     if ((row-1) >= 0) {
//         const north = arr[row-1][col];
//         neighbors.north = north;
//     }

//     if ((row + 1) <= (arr.length-1)) {
//         const south = arr[row + 1][col];
//         neighbors.south = south;
//     }

//     if ((col + 1) <= (arr[row].length-1)) {
//         const east = arr[row][col+1];
//         neighbors.east = east;
//     }

//     if ((col - 1) >= 0) {
//         const west = arr[row][col - 1];
//         neighbors.west = west;
//     }

//     console.log(neighbors);
// }

// getRowsAmount = (arr) => {
//     const rows = (arr.length-1);
//     return rows;
// }

Array.prototype.getNeighbors = (row, col) => {
    const neighbors = {};
    // const home = arr[row][col];

    console.log('this', this);
    

    // if ((row - 1) >= 0) {
    //     const north = this[row - 1][col];
    //     neighbors.north = north;
    // }

    // if ((row + 1) <= (this.length - 1)) {
    //     const south = this[row + 1][col];
    //     neighbors.south = south;
    // }

    // if ((col + 1) <= (this[row].length - 1)) {
    //     const east = this[row][col + 1];
    //     neighbors.east = east;
    // }

    // if ((col - 1) >= 0) {
    //     const west = this[row][col - 1];
    //     neighbors.west = west;
    // }

    // console.log(neighbors);
}

let bar = createMatrix(5, 5);

// console.log('bar', bar);

bar.getNeighbors(1,1);
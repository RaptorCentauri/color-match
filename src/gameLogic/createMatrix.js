const createMatrix = (rows, col) => 
    Array.from({length:rows}, () => Array.from({length:col}, () => null));
        // Array(rows).fill().map((val, index) => Array(col).fill({id: index, value: null}))
        // Array(rows).fill().map((val, index) => Array(col).fill({id: index, value: null}))
        
    // Array.from({length:rows}, () => new Array(col).fill({id: null, value: null}));

 





export default createMatrix


let me = createMatrix(3,3)

me.forEach(row => {
    console.log(row);
})
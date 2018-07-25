const createMatrix = (rows, col) => 
    Array.from({length:rows}, () => Array.from({length:col}, () => null));



export default createMatrix

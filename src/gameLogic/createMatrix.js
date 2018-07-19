const createMatrix = (rows, col, range) => 
    Array.from({length:rows}, () => Array.from({length:col}, () => Math.floor(Math.random() * range)));

export default createMatrix
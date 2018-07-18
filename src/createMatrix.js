const createMatrix = (rows, col) => {
    let foo = Array.from({ length: rows }, () => Array.from({ length: col }, () => Math.floor(Math.random() * 4)));
    return foo;
}

export default createMatrix
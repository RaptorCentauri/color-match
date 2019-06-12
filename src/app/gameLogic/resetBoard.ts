const resetBoard = (board, value) => {
    let reset ={
        board: board
    }
    
    let genRandNum = () => Math.floor((Math.random() * (value - 1)) + 1);
    
    board.resetMatrix();
    board.fillEmptyValues(genRandNum)

    return reset
}

export default resetBoard;
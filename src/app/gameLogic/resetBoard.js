const resetBoard = (board) => {
    let reset ={
        board: board
    }
    let genRandNum = () => Math.floor((Math.random() * 4) + 1)
    
    
    board.resetMatrix();
    board.fillEmptyValues(genRandNum)

    return reset
}

export default resetBoard;
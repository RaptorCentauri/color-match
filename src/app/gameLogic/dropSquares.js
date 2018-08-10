const dropSquares = (board) => {
    let drop ={
        board: board
    }
    board.dropDown();
    let genRandNum = () => Math.floor((Math.random() * 4) + 1)
    board.fillEmptyValues(genRandNum)

    return drop;
}

export default dropSquares;
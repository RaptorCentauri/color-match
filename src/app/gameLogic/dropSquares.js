const dropSquares = (board, value) => {

    let drop ={
        board: board
    }
    
    board.dropDown();
    let genRandNum = () => Math.floor((Math.random() * (value - 1)) + 1);
    board.fillEmptyValues(genRandNum)

    return drop;
}

export default dropSquares;
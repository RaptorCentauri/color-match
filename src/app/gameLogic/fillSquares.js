const fillSquares = (board) => {
    let fill ={
        board: board
    }
    let genRandNum = () => Math.floor((Math.random() * 4) + 1)
    board.fillEmptyValues(genRandNum)
    return fill;
}

export default fillSquares;
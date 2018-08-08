const playGame = (board, i) => {
    let round ={
        board: board,
        score: 0
    }  

    if (board.getChainfromID(i).size > 1) {
        let value = board.getValueOfId(i);
        round.score = value * board.getChainfromID(i).size;

        // round.score = this.calculateMoveScore(value, board.getChainfromID(i).size);
    }

    board.destroyChainfromID(i)
    board.dropDown();


    let genRandNum = () => Math.floor((Math.random() * 4) + 1)
    board.fillEmptyValues(genRandNum)

    return round
}

export default playGame